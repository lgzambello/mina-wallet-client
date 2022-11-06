import * as React from "react";
import Button from "./Button";
import { Properties } from "csstype";

const CreateProofView = () => {
  return (
    <Button
      value="Connect Bank Account"
      onClick={() => alert("Coming soon you impatient asshole!")}
      style={buttonStyle}
    />
  );
};

const buttonStyle: Properties = {
  marginTop: "50px",
};

export default CreateProofView;
