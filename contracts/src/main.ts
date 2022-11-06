import { VerifyAssets } from './Verify.js';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
  CircuitString
} from 'snarkyjs';
 

// THIS FILE IS FOR TESTING ONLY, PLEASE IGNORE


(async function main() {
    await isReady;
    console.log('SnarkyJS loaded')
    const Local = Mina.LocalBlockchain();
    Mina.setActiveInstance(Local);
    const deployerAccount = Local.testAccounts[0].privateKey;

    // ----------------------------------------------------
    // Create a public/private key pair. The public key is our address and where we will deploy to
    const zkAppPrivateKey = PrivateKey.random();
    const zkAppAddress = zkAppPrivateKey.toPublicKey();

    // ----------------------------------------------------
    const userPrivateAddress = PrivateKey.random();
    const userPublicAddress = userPrivateAddress.toPublicKey();
    console.log("User address: ", userPublicAddress.toJSON());
    
    // Create an instance of our Square smart contract and deploy it to zkAppAddress
    const contract = new VerifyAssets(zkAppAddress);
    
    const deployTxn = await Mina.transaction(deployerAccount, () => {
        AccountUpdate.fundNewAccount(deployerAccount);
        contract.deploy({ zkappKey: zkAppPrivateKey });
        // contract.init();
        contract.sign(zkAppPrivateKey);
    });
    await deployTxn.send().wait();
    // // Get the initial state of our zkApp account after deployment
    // const [address1, date1, verified1] = 
    contract.verifyIncome(Field(0), Field(0), Field(0), userPrivateAddress.toPublicKey(), Field(10), Field(1))
    // console.log("Address: ", address1.toJSON());
    // console.log("Date: ", date1.toJSON());
    // console.log("Verified: ", verified1.toJSON());
    // await new Promise(r => setTimeout(r, 10000));

    const [address, date, verified] = contract.getUser1();
    // console.log("Address: ", address.toJSON());
    console.log("Date: ", date.toJSON());
    // console.log("Verified: ", verified.toJSON());
    
    // ----------------------------------------------------

    console.log('Shutting down')
    await shutdown();
})();
  