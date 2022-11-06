import * as React from "react";
import { Properties } from "csstype";
import { convertToMinaCoin, convertToUsd } from "../utils/UtilityFunctions";
import Colors from "../constants/Colors";
import WalletSelector from "./WalletSelector";

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
