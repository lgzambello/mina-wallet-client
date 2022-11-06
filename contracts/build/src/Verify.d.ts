import { Field, State, PrivateKey, SmartContract, PublicKey, UInt64, DeployArgs } from 'snarkyjs';
export declare class Verify extends SmartContract {
    userAddress1: State<PublicKey>;
    date1: State<UInt64>;
    verified1: State<Field>;
    userAddress2: State<PublicKey>;
    date2: State<Field>;
    verified2: State<Field>;
    userAddress3: State<PublicKey>;
    date3: State<Field>;
    verified3: State<Field>;
    userAddress4: State<PublicKey>;
    date4: State<Field>;
    verified4: State<Field>;
    userAddress5: State<PublicKey>;
    date5: State<Field>;
    verified5: State<Field>;
    x: State<Field>;
    deploy(args: DeployArgs): void;
    getUser1(): (Field | PublicKey | UInt64)[];
    getUser2(): (Field | PublicKey)[];
    getUser3(): (Field | PublicKey)[];
    getUser4(): (Field | PublicKey)[];
    getUser5(): (Field | PublicKey)[];
    verifyIncome(plaidApiKey: Field, bankAccountId: Field, plaidAccountId: Field, userAddress: PublicKey, userBalance: Field, userIdToUpdate: Field): (Field | PublicKey | UInt64)[];
}
export declare class GuardianWallet extends SmartContract {
    owner: State<PublicKey>;
    guardian1: State<PublicKey>;
    guardian2: State<PublicKey>;
    deploy(args: DeployArgs): void;
    init(owner: PublicKey, guardian1: PublicKey, guardian2: PublicKey): void;
    recoverWallet(newOwner: PublicKey, isGuardian: PrivateKey): void;
    setNewGuadian1(newGuardianKey: PublicKey, isOwner: PrivateKey): void;
    setNewGuadian2(newGuardianKey: PublicKey, isOwner: PrivateKey): void;
    getGuardians(): {
        guardian1: State<PublicKey>;
        guardian2: State<PublicKey>;
    };
    getBalance(): UInt64;
    sendMoney(receiverAddress: PublicKey, amount: UInt64, isOwner: PrivateKey): void;
}
