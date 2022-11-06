import * as React from "react";
import Button from "./Button";
import { Properties } from "csstype";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Colors from "../constants/Colors";
import { PlaidLink } from "react-plaid-link";

enum PROOF_TYPE {
  NET_WORTH,
}

const CreateProofView = () => {
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
      <h3 style={{ fontWeight: 500 }}>
        Please connect your bank account to continue
      </h3>
      <PlaidLink
        token={"link-sandbox-a0d983b5-39c5-4c31-8733-ad88584bef8d"}
        onSuccess={success => console.log(success)}>Connect Bank Account
      </PlaidLink>
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
