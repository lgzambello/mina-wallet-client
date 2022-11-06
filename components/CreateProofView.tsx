import * as React from "react";
import Button from "./Button";
import { Properties } from "csstype";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Colors from "../constants/Colors";
import { PlaidLink } from "react-plaid-link";
import { useState } from "react";

enum PROOF_TYPE {
  NET_WORTH,
}

const CreateProofView = () => {
  const [connected, setConnected] = useState(false);
  const [destinationAddress, setDestinationAddress] = useState("");
  return (
    <div style={containerStyle}>
      <FormControl fullWidth style={selectStyle}>
        <InputLabel id="demo-simple-select-label">Verification Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={PROOF_TYPE.NET_WORTH}
          label="Verification Type"
          onChange={() => null}
        >
          <MenuItem value={PROOF_TYPE.NET_WORTH}>Verify bank balance</MenuItem>
        </Select>
      </FormControl>
      {!connected && <h3 style={{ fontWeight: 500 }}>
        Please connect your bank account to continue
      </h3>}
      {!connected ? <PlaidLink
        token={"link-sandbox-a0d983b5-39c5-4c31-8733-ad88584bef8d"}
        onSuccess={success => setConnected(true)}>Connect Bank Account
      </PlaidLink> : (
        <div><h3>Account Balance</h3>
        <p>$100.00</p>
                    <div><TextField
                    id="standard-basic"
                    label="Destination address"
                    variant="standard"
                    onChange={(event: any) => setDestinationAddress(event.target.value)}
                    value={destinationAddress}
                  />
        <Button value="Send Verification" onClick={() => window.mina.signMessage({message: `Send Bank Balance verification to user ${destinationAddress}`})} /></div></div>
      )}

    </div>
  );
};

const selectStyle: Properties = {
  marginTop: "20px",
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

const buttonStyle: Properties = {};

export default CreateProofView;
