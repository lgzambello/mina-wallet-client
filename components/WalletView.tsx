import * as React from "react";
import { Properties } from "csstype";
import { convertToMinaCoin, convertToUsd } from "../utils/UtilityFunctions";
import Colors from "../constants/Colors";
import WalletSelector from "./WalletSelector";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "./Button";

interface WalletViewProps {
  publicKey: string;
  balance: string;
  selectedWallet: string;
  wallets: string[];
  selectWallet: (wallet: string) => void;
}

const WalletView = ({
  publicKey,
  balance,
  selectedWallet,
  wallets,
  selectWallet,
}: WalletViewProps) => {
  const [guardians, setGuardians] = useState<string[]>([]);
  const [guardianValue, setGuardianValue] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [newOwner, setNewOwner] = useState("");
  return (
    <div style={containerStyle}>
      <WalletSelector
        selectedWallet={selectedWallet as string}
        onSelect={selectWallet}
        wallets={wallets as string[]}
        style={selectorStyle}
      />
      <h4 style={headerStyle}>Balance</h4>
      <p style={valueStyle}>{convertToMinaCoin(parseInt(balance))}</p>
      <h1>My Guardians</h1>
      {guardians.length > 0 && <div><h4>Guardians</h4>{guardians.map(guardian => <p>{guardian}</p>)}</div>}
      {guardians.length < 3 && <div style={guardianContainer}>     <TextField
        id="standard-basic"
        label="Add Guardian"
        variant="standard"
        onChange={(event: any) => setGuardianValue(event.target.value)}
        value={guardianValue}
      />
      <Button value="Add Guardian"  onClick={() => {guardians.push(guardianValue);
      setGuardianValue(""); window.mina.signMessage({message: `Add ${guardianValue} as a new Guardian`})}} /></div>}
      <h1>Recover Wallet</h1>
      <TextField
        id="standard-basic"
        label="Contract Address"
        variant="standard"
        onChange={(event: any) => setContractAddress(event.target.value)}
        value={contractAddress}
      />
            <TextField
        id="standard-basic"
        label="New wallet address"
        variant="standard"
        onChange={(event: any) => setNewOwner(event.target.value)}
        value={newOwner}
        style={{marginLeft: '30px'}}
      />
      <Button value="Recover" onClick={() => window.mina.signMessage({message: `Recover Wallet from address ${contractAddress} to the new address ${newOwner}.`})} />
    </div>
  );
};

const headerStyle: Properties = {
  fontWeight: 600,
  fontSize: "2rem",
};

const selectorStyle: Properties = {
  marginTop: "30px",
};

const guardianContainer: Properties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginTop: '30px'
}

const valueStyle: Properties = {
  fontWeight: 400,
  fontSize: "1rem",
  marginTop: "-20px",
};

const containerStyle: Properties = {
  fontSize: "1rem",
  borderRadius: "30px",
  border: "1px solid " + Colors.PRIMARY,
  padding: "20px",
  marginTop: "30px",
  marginLeft: "50px",
  backgroundColor: "white",
};

export default WalletView;
