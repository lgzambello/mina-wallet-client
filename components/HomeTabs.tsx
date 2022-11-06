import * as React from "react";
import { Properties } from "csstype";
import Tab from "./Tab";
import Colors from "../constants/Colors";
import logo from "../assets/dalleLogo.jpeg";
import Image from "next/image";

export enum HomeTab {
  WALLET = "Wallet",
  SEND_VERIFICATION = "Send Verification",
  VERIFICATION_INBOX = "Verification Inbox",
}

interface HomeTabsProps {
  selectedTab: HomeTab;
  onSelectTab: (tab: HomeTab) => void;
}

const HomeTabs = ({ selectedTab, onSelectTab }: HomeTabsProps) => {
  return (
    <div style={containerStyle}>
      <Image
        src={logo}
        style={brandNameStyle}
        alt={""}
        onClick={() => onSelectTab(HomeTab.WALLET)}
      />
      {Object.values(HomeTab).map((tab) => (
        <Tab
          value={tab}
          onSelect={onSelectTab}
          selected={tab === selectedTab}
        />
      ))}
    </div>
  );
};

const containerStyle: Properties = {
  display: "flex",
  flexDirection: "row",
  alignSelf: "flex-start",
  width: "100%",
};

const brandNameStyle: Properties = {
  width: "auto",
  height: "40px",
  marginRight: "25px",
  marginLeft: "15px",
  cursor: "pointer",
};

export default HomeTabs;
