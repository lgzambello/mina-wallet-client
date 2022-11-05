type AccountDetails = {
  publicKey: string;
  account: {
    balance: {
      total: String;
      lockedBalance: String;
    };
  };
};

export default AccountDetails;
