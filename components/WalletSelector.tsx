import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { Properties } from "csstype";

interface WalletSelectorProps {
  selectedWallet: string;
  wallets: string[];
  onSelect: (wallet: string) => void;
  style?: Properties;
}

const WalletSelector = ({
  wallets,
  onSelect,
  selectedWallet,
  style,
}: WalletSelectorProps) => {
  return (
    <FormControl fullWidth style={style}>
      <InputLabel id="demo-simple-select-label">Wallet</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedWallet}
        label="Wallet"
        onChange={(event) => onSelect(event.target.value)}
      >
        {wallets.map((wallet) => (
          <MenuItem value={wallet}>{wallet}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default WalletSelector;
