import axios, { AxiosResponse } from "axios";
import AccountDetails from "../types/AccountDetails";

const baseURL = "https://api.minaexplorer.com";

class MinaClient {
  private client = axios.create({ baseURL });

  public getAccountDetails = async (
    publicKey: string
  ): Promise<AxiosResponse<AccountDetails>> => {
    return this.client.get(`/accounts/${publicKey}`);
  };
}

export default MinaClient;
