import * as React from "react";
import { Properties } from "csstype";

interface ButtonProps {
  value: string;
  onClick: () => void;
  style?: Properties;
}

const Button = ({ value, onClick, style }: ButtonProps) => {
  return (
    <button style={{ ...defaultButtonStyle, ...style }} onClick={onClick}>
      {value}
    </button>
  );
};

const defaultButtonStyle: Properties = {
  padding: "15px",
  borderRadius: "30px",
  fontSize: "1.5pem",
  backgroundColor: "transparent",
  outline: "none",
};

export default Button;
