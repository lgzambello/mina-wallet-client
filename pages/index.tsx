import Head from "next/head";
import Image from "next/image";
import { Properties } from "csstype";
import React, { useState } from "react";
import MinaClient from "../api/MinaClient";
import AccountDetails from "../types/AccountDetails";
import WalletSelector from "../components/WalletSelector";
import WalletView from "../components/WalletView";
import HomeTabs, { HomeTab } from "../components/HomeTabs";
import CreateProofView from "../components/CreateProofView";

const Home = () => {
  const minaClient = new MinaClient();
  const [selectedWallet, setSelectedWallet] = useState<string>();
  const [wallets, setWallets] = useState<string[]>();
  const [accountDetails, setAccountDetails] = useState<AccountDetails>();
  const [buttonText, setButtonText] = useState("Connect your wallet");
  const [tab, setTab] = useState(HomeTab.WALLET);

  const onConnect = async () => {
    if (!window.mina) {
      alert("No provider was found, please add the Auro Wallet extension");
    } else {
      setButtonText("Onboarding in progress");
      let data = await window.mina.requestAccounts().catch((err: any) => err);
      console.log(JSON.stringify(data));
      if (data.message) {
        setButtonText(data.message);
      } else {
        let publicKeys = data;
        setWallets(publicKeys);
        setSelectedWallet(publicKeys[0]);
        getAccountDetails(publicKeys[0]);
      }
    }
  };

  const getAccountDetails = async (publicKey: string) => {
    const resp = await minaClient.getAccountDetails(publicKey);
    if (resp.status == 200) {
      setAccountDetails(resp.data);
      console.log(JSON.stringify(resp.data));
    } else {
      alert("Error retrieving account details for public key: " + publicKey);
    }
  };

  const selectWallet = (publicKey: string) => {
    setSelectedWallet(publicKey);
    getAccountDetails(publicKey);
  };

  console.log(tab);

  const TabView = () => {
    switch (tab) {
      case HomeTab.WALLET:
        return (
          <div style={walletContainerStyle}>
            <WalletSelector
              selectedWallet={selectedWallet as string}
              onSelect={selectWallet}
              wallets={wallets as string[]}
              style={selectorStyle}
            />
            <WalletView
              publicKey={selectedWallet as string}
              balance={accountDetails?.account.balance.total as string}
            />
          </div>
        );
      case HomeTab.SEND_VERIFICATION:
        return <CreateProofView />;
      default:
        return <div>Wassup</div>;
    }
  };

  return (
    <div>
      <Head>
        <title>Mina Guardian Wallet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={containerStyle}>
        {accountDetails == undefined ||
        selectedWallet == undefined ||
        wallets == undefined ? (
          <>
            <h1>Welcome to Factum</h1>
            <button style={connectButtonStyle} onClick={onConnect}>
              {buttonText}
            </button>
          </>
        ) : (
          <>
            <HomeTabs selectedTab={tab} onSelectTab={setTab} />
            <TabView />
          </>
        )}
      </div>
    </div>
  );
};

const walletContainerStyle: Properties = {};

const containerStyle: Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};

const connectButtonStyle: Properties = {
  padding: "10px",
  borderRadius: "30px",
  fontSize: "1.5rem",
  marginTop: "50px",
};

const selectorStyle: Properties = {
  marginTop: "30px",
};

export default Home;
