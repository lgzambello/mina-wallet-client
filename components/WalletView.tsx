import * as React from "react";
import { Properties } from "csstype";
import { convertToMinaCoin, convertToUsd } from "../utils/UtilityFunctions";

interface WalletViewProps {
  publicKey: string;
  balance: string;
}

const WalletView = ({ publicKey, balance }: WalletViewProps) => {
  console.log(balance);
  return (
    <div>
      <h3 style={headerStyle}>Public Key</h3>
      <p style={valueStyle}>{publicKey}</p>
      <h3 style={headerStyle}>Balance</h3>
      <p style={valueStyle}>{convertToMinaCoin(parseInt(balance))}</p>
    </div>
  );
};

const headerStyle: Properties = {
  fontWeight: 600,
  fontSize: "2rem",
};

const valueStyle: Properties = {
  fontWeight: 400,
  fontSize: "1rem",
};

export default WalletView;
