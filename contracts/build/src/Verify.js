var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, State, state, isReady, method, PrivateKey, SmartContract, PublicKey, UInt64, Permissions } from 'snarkyjs';
await isReady;
export class Verify extends SmartContract {
    constructor() {
        // NOTE: Snarkyjs does not support lists so we are going to hack around this by creating 5 specific users
        super(...arguments);
        //User 1
        this.userAddress1 = State();
        this.date1 = State();
        this.verified1 = State();
        // User 2
        this.userAddress2 = State();
        this.date2 = State();
        this.verified2 = State();
        // User 3
        this.userAddress3 = State();
        this.date3 = State();
        this.verified3 = State();
        // User 4
        this.userAddress4 = State();
        this.date4 = State();
        this.verified4 = State();
        // User 5
        this.userAddress5 = State();
        this.date5 = State();
        this.verified5 = State();
        this.x = State();
        // // Below is just a test method
        // @method getBalance(){
        //     this.account.balance.assertEquals(this.account.balance.get());
        //     // Get the balance of the smart contract 
        //     return this.account.balance.get()
        // }
        // @method getuserAddress(){
        //     this.userAddress.assertEquals(this.userAddress.get());
        //     return this.userAddress.get()
        // }
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }
    // // Note that these inputs to our init() method are private to whomever initializes the contract. 
    // // Nobody looking at the zkApp account on the chain can see or know what values firstSecret or salt actually are.
    // @method init(){
    //     // const lastNameString = userLastName.toString()
    //     // this.userAddress.set(userAddress)
    //     // this.userName.set(userName)
    //     // this.userLastName.set(userLastName)
    //     // this.userBalance.set(userBalance)
    //     // this.date.set(Field(0))
    //     // this.verified.set(Field(false))
    // }
    getUser1() {
        this.userAddress1.assertEquals(this.userAddress1.get());
        this.date1.assertEquals(this.date1.get());
        this.verified1.assertEquals(this.verified1.get());
        const address = this.userAddress1.get();
        const date = this.date1.get();
        const verified = this.verified1.get();
        return [address, date, verified];
    }
    getUser2() {
        this.userAddress2.assertEquals(this.userAddress1.get());
        this.date2.assertEquals(this.date2.get());
        this.verified2.assertEquals(this.verified1.get());
        const address = this.userAddress2.get();
        const date = this.date2.get();
        const verified = this.verified2.get();
        return [address, date, verified];
    }
    getUser3() {
        this.userAddress3.assertEquals(this.userAddress3.get());
        this.date3.assertEquals(this.date3.get());
        this.verified3.assertEquals(this.verified3.get());
        const address = this.userAddress3.get();
        const date = this.date3.get();
        const verified = this.verified3.get();
        return [address, date, verified];
    }
    getUser4() {
        this.userAddress4.assertEquals(this.userAddress4.get());
        this.date4.assertEquals(this.date4.get());
        this.verified4.assertEquals(this.verified4.get());
        const address = this.userAddress4.get();
        const date = this.date4.get();
        const verified = this.verified4.get();
        return [address, date, verified];
    }
    getUser5() {
        this.userAddress5.assertEquals(this.userAddress5.get());
        this.date5.assertEquals(this.date5.get());
        this.verified5.assertEquals(this.verified5.get());
        const address = this.userAddress5.get();
        const date = this.date5.get();
        const verified = this.verified5.get();
        return [address, date, verified];
    }
    verifyIncome(plaidApiKey, bankAccountId, plaidAccountId, userAddress, userBalance, userIdToUpdate) {
        // Use api key to retrieve balance 
        const plaidBalance = Field(100); // TODO
        // Compare balance to userProvider balance to see if its greater
        plaidBalance.assertGte(userBalance);
        const now = Date.now();
        this.userAddress1.assertEquals(this.userAddress1.get());
        this.date1.assertEquals(this.date1.get());
        this.verified1.assertEquals(this.verified1.get());
        if (userIdToUpdate.toString() == "1") {
            // Set address for user
            this.userAddress1.set(userAddress);
            // Set the verified to true
            this.verified1.set(Field(1));
            // Set the date that the verification took place 
            this.date1.set(new UInt64(1));
            console.log(this.date1.get());
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()];
        }
        else if (userIdToUpdate.toString() == "2") {
            // Set address for user
            this.userAddress2.set(userAddress);
            // Set the verified to true
            this.verified2.set(Field(1));
            // Set the date that the verification took place 
            this.date2.set(Field(now));
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()];
        }
        else if (userIdToUpdate.toString() == "3") {
            // Set address for user
            this.userAddress3.set(userAddress);
            // Set the verified to true
            this.verified3.set(Field(1));
            // Set the date that the verification took place 
            this.date3.set(Field(now));
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()];
        }
        else if (userIdToUpdate.toString() == "4") {
            // Set address for user
            this.userAddress4.set(userAddress);
            // Set the verified to true
            this.verified4.set(Field(1));
            // Set the date that the verification took place 
            this.date4.set(Field(now));
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()];
        }
        else {
            // Set address for user
            this.userAddress5.set(userAddress);
            // Set the verified to true
            this.verified5.set(Field(1));
            // Set the date that the verification took place 
            this.date5.set(Field(now));
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()];
        }
    }
}
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], Verify.prototype, "userAddress1", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], Verify.prototype, "date1", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "verified1", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], Verify.prototype, "userAddress2", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "date2", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "verified2", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], Verify.prototype, "userAddress3", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "date3", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "verified3", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], Verify.prototype, "userAddress4", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "date4", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "verified4", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], Verify.prototype, "userAddress5", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "date5", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "verified5", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], Verify.prototype, "x", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Verify.prototype, "getUser1", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Verify.prototype, "getUser2", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Verify.prototype, "getUser3", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Verify.prototype, "getUser4", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Verify.prototype, "getUser5", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field,
        Field,
        Field,
        PublicKey,
        Field,
        Field]),
    __metadata("design:returntype", void 0)
], Verify.prototype, "verifyIncome", null);
export class GuardianWallet extends SmartContract {
    constructor() {
        super(...arguments);
        this.owner = State();
        this.guardian1 = State();
        this.guardian2 = State();
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
            editSequenceState: Permissions.proofOrSignature(),
        });
    }
    init(owner, guardian1, guardian2) {
        this.owner.set(owner);
        this.guardian1.set(guardian1);
        this.guardian2.set(guardian2);
    }
    recoverWallet(newOwner, isGuardian) {
        // Check if the sender is one of the Guardians
        // TODO
        this.guardian1.assertEquals(this.guardian1.get());
        this.guardian2.assertEquals(this.guardian2.get());
        const guardian1Key = this.guardian1.get();
        const guardian2Key = this.guardian2.get();
        isGuardian.toPublicKey().equals(guardian1Key).or(isGuardian.toPublicKey().equals(guardian2Key)).assertEquals(true);
        // Set owner state
        this.owner.set(newOwner);
    }
    setNewGuadian1(newGuardianKey, isOwner) {
        // Check that the sender is the owner
        // TODO
        this.owner.assertEquals(isOwner.toPublicKey());
        this.guardian1.set(newGuardianKey);
    }
    setNewGuadian2(newGuardianKey, isOwner) {
        // Check that the sender is the owner
        // TODO
        this.owner.assertEquals(isOwner.toPublicKey());
        this.guardian2.set(newGuardianKey);
    }
    getGuardians() {
        return {
            "guardian1": this.guardian1,
            "guardian2": this.guardian2
        };
    }
    getBalance() {
        this.account.balance.assertEquals(this.account.balance.get());
        // Get the balance of the smart contract 
        return this.account.balance.get();
    }
    sendMoney(receiverAddress, amount, isOwner) {
        // Verify that the person who is calling this function is the owner
        this.owner.assertEquals(isOwner.toPublicKey());
        // Verify you have enough money to send money
        this.account.balance.assertEquals(this.account.balance.get()); // Verifies current state
        amount.assertLt(this.account.balance.get());
        // Send money
        this.send({
            to: receiverAddress,
            amount,
        });
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GuardianWallet.prototype, "owner", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GuardianWallet.prototype, "guardian1", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GuardianWallet.prototype, "guardian2", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PublicKey, PublicKey]),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "init", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PrivateKey]),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "recoverWallet", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PrivateKey]),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "setNewGuadian1", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PrivateKey]),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "setNewGuadian2", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "getGuardians", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "getBalance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, UInt64, PrivateKey]),
    __metadata("design:returntype", void 0)
], GuardianWallet.prototype, "sendMoney", null);
