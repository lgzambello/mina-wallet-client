import * as React from "react";
import { HomeTab } from "./HomeTabs";
import { Properties } from "csstype";
import Colors from "../constants/Colors";

interface TabProps {
  value: HomeTab;
  onSelect: (value: HomeTab) => void;
  selected: boolean;
}

const Tab = ({ value, onSelect, selected }: TabProps) => {
  return (
    <button
      onClick={() => onSelect(value)}
      style={selected ? selectedButtonStyle : buttonStyle}
    >
      {value}
    </button>
  );
};

const buttonStyle: Properties = {
  cursor: "pointer",
  backgroundColor: "transparent",
  outline: "none",
  border: "none",
  fontSize: "2rem",
  marginRight: "25px",
  whiteSpace: "nowrap",
  fontWeight: 200,
  color: Colors.PRIMARY,
  fontFamily: "serif",
};

const selectedButtonStyle: Properties = {
  ...buttonStyle,
  textDecoration: "underline",
};

export default Tab;
