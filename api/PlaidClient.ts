import axios, { AxiosResponse } from "axios";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
  PlaidLinkOnSuccessMetadata
} from 'react-plaid-link';

const baseURL = "https://sandbox.plaid.com";
const clientId = "61705ce5d8717a0013306fba";
const secret = "ae64ab651df9fb650d53f1a5c9ec41";
const accessToken = "access-sandbox-53fcf7bc-2652-4e16-ac8e-f324d3de91c6";
const itemId = "oEA3E16wRqCNnz57Vvp6HVVZZdjXd9uRkzgpa";

class PlaidClient {
  public getLinkToken = async (): Promise<AxiosResponse<string>> => {
    let client = axios.create({ baseURL });
    let body = {
      client_id: clientId,
      secret: secret,
      client_name: "Factum",
      language: "en",
      country_codes: ["US"],
      products: ["auth"],
      user: { // TODO: take this from input
        client_user_id: "abc123xyz"
      },
    }
    return client.post("/link/token/create", body);
  };
}

export default PlaidClient;
