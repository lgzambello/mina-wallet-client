import * as React from "react";
import Button from "./Button";
import { Properties } from "csstype";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

enum PROOF_TYPE {
  NET_WORTH,
}

const CreateProofView = () => {
  return (
    <>
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
      <h3>Please connect your bank account to continue</h3>
      <Button
        value="Connect Bank Account"
        onClick={() => alert("Coming soon you impatient asshole!")}
        style={buttonStyle}
      />
    </>
  );
};

const selectStyle: Properties = {
  marginTop: "50px",
  width: "50%",
};

const buttonStyle: Properties = {};

export default CreateProofView;
