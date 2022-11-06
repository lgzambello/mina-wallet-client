import * as React from "react";
import { Properties } from "csstype";
import Tab from "./Tab";

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
};

export default HomeTabs;
