import {
    Field,
    State,
    state,
    isReady,
    method,
    PrivateKey,
    SmartContract,
    PublicKey,
    UInt64,
    shutdown,
    DeployArgs,
    Permissions,
    CircuitString,
    arrayProp
} from 'snarkyjs';

await isReady;


export class VerifyAssets extends SmartContract {
    // NOTE: Snarkyjs does not support lists so we are going to hack around this by creating 5 specific users

    //User 1
    @state(PublicKey) userAddress1 = State<PublicKey>();
    @state(UInt64) date1 = State<UInt64>();
    @state(Field) verified1 = State<Field>();
    // User 2
    @state(PublicKey) userAddress2 = State<PublicKey>();
    @state(Field) date2 = State<Field>();
    @state(Field) verified2 = State<Field>();
    // User 3
    @state(PublicKey) userAddress3 = State<PublicKey>();
    @state(Field) date3 = State<Field>();
    @state(Field) verified3 = State<Field>();
    // User 4
    @state(PublicKey) userAddress4 = State<PublicKey>();
    @state(Field) date4 = State<Field>();
    @state(Field) verified4 = State<Field>();
    // User 5
    @state(PublicKey) userAddress5 = State<PublicKey>();
    @state(Field) date5 = State<Field>();
    @state(Field) verified5 = State<Field>();
    @state(Field) x = State<Field>();


    deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }

    @method public getUser1(){
        this.userAddress1.assertEquals(this.userAddress1.get());
        this.date1.assertEquals(this.date1.get());
        this.verified1.assertEquals(this.verified1.get());


        const address = this.userAddress1.get()
        const date = this.date1.get()
        const verified = this.verified1.get()
        return [address, date, verified]
    }

    @method getUser2(){
        this.userAddress2.assertEquals(this.userAddress1.get());
        this.date2.assertEquals(this.date2.get());
        this.verified2.assertEquals(this.verified1.get());


        const address = this.userAddress2.get()
        const date = this.date2.get()
        const verified = this.verified2.get()
        return [address, date, verified]
    }

    @method getUser3(){
        this.userAddress3.assertEquals(this.userAddress3.get());
        this.date3.assertEquals(this.date3.get());
        this.verified3.assertEquals(this.verified3.get());


        const address = this.userAddress3.get()
        const date = this.date3.get()
        const verified = this.verified3.get()
        return [address, date, verified]
    }

    @method getUser4(){
        this.userAddress4.assertEquals(this.userAddress4.get());
        this.date4.assertEquals(this.date4.get());
        this.verified4.assertEquals(this.verified4.get());


        const address = this.userAddress4.get()
        const date = this.date4.get()
        const verified = this.verified4.get()
        return [address, date, verified]
    }

    @method getUser5(){
        this.userAddress5.assertEquals(this.userAddress5.get());
        this.date5.assertEquals(this.date5.get());
        this.verified5.assertEquals(this.verified5.get());


        const address = this.userAddress5.get()
        const date = this.date5.get()
        const verified = this.verified5.get()
        return [address, date, verified]
    }

    @method verifyIncome(
        plaidApiKey: Field, 
        bankAccountId: Field, 
        plaidAccountId: Field, 
        userAddress: PublicKey, 
        userBalance: Field,
        userIdToUpdate: Field
    ){
        // Use api key to retrieve balance 
        const plaidBalance = Field(100) // TODO - This would fetch the Plaid API
        // Compare balance to userProvider balance to see if its greater
        
        plaidBalance.assertGte(userBalance)
        const now = Date.now()
        this.userAddress1.assertEquals(this.userAddress1.get());
        this.date1.assertEquals(this.date1.get());
        this.verified1.assertEquals(this.verified1.get());        

        if (userIdToUpdate.toString() == "1"){            
            // Set address for user
            this.userAddress1.set(userAddress)
            // Set the verified to true
            this.verified1.set(Field(1))
            // Set the date that the verification took place 
            this.date1.set(new UInt64(1))
            console.log(this.date1.get());
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()]
        }else if (userIdToUpdate.toString() == "2"){
            // Set address for user
            this.userAddress2.set(userAddress)
            // Set the verified to true
            this.verified2.set(Field(1))
            // Set the date that the verification took place 
            this.date2.set(Field(now))
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()]
        }else if (userIdToUpdate.toString() == "3"){
            // Set address for user
            this.userAddress3.set(userAddress)
            // Set the verified to true
            this.verified3.set(Field(1))
            // Set the date that the verification took place 
            this.date3.set(Field(now))
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()]
        }else if (userIdToUpdate.toString() == "4"){
            // Set address for user
            this.userAddress4.set(userAddress)
            // Set the verified to true
            this.verified4.set(Field(1))
            // Set the date that the verification took place 
            this.date4.set(Field(now))
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()]
        }else {
            // Set address for user
            this.userAddress5.set(userAddress)
            // Set the verified to true
            this.verified5.set(Field(1))
            // Set the date that the verification took place 
            this.date5.set(Field(now))
            return [this.userAddress1.get(), this.date1.get(), this.verified1.get()]
        }

    }

}












export class GuardianWallet extends SmartContract {

    @state(Field) owner = State<PublicKey>();
    @state(Field) guardian1 = State<PublicKey>();
    @state(Field) guardian2 = State<PublicKey>();

    deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
        ...Permissions.default(),
        editState: Permissions.proofOrSignature(),
        editSequenceState: Permissions.proofOrSignature(),
        });
    }

    @method init(owner: PublicKey, guardian1: PublicKey, guardian2: PublicKey){
        this.owner.set(owner)
        this.guardian1.set(guardian1)
        this.guardian2.set(guardian2)
    }

    @method recoverWallet(newOwner: PublicKey, isGuardian: PrivateKey){
        // Check if the sender is one of the Guardians
        // TODO
        this.guardian1.assertEquals(this.guardian1.get());
        this.guardian2.assertEquals(this.guardian2.get());
        const guardian1Key = this.guardian1.get()
        const guardian2Key = this.guardian2.get()
        isGuardian.toPublicKey().equals(guardian1Key).or(isGuardian.toPublicKey().equals(guardian2Key)).assertEquals(true)

        // Set owner state
        this.owner.set(newOwner)
    }

    @method setNewGuadian1(newGuardianKey: PublicKey, isOwner: PrivateKey){
        // Check that the sender is the owner
        // TODO
        this.owner.assertEquals(isOwner.toPublicKey())

        this.guardian1.set(newGuardianKey)
    }

    @method setNewGuadian2(newGuardianKey: PublicKey, isOwner: PrivateKey){
        // Check that the sender is the owner
        // TODO
        this.owner.assertEquals(isOwner.toPublicKey())

        this.guardian2.set(newGuardianKey)
    }

    @method getGuardians(){
        this.guardian1.assertEquals(this.guardian1.get());
        this.guardian2.assertEquals(this.guardian2.get());
        return {
            "guardian1" : this.guardian1.get(),
            "guardian2" : this.guardian2.get()
        }
    }

    @method getBalance(){
        this.account.balance.assertEquals(this.account.balance.get());
        // Get the balance of the smart contract 
        return this.account.balance.get()
    }

    @method sendMoney(receiverAddress: PublicKey, amount: UInt64, isOwner: PrivateKey) {
        // Verify that the person who is calling this function is the owner
        this.owner.assertEquals(isOwner.toPublicKey())

        // Verify you have enough money to send money
        this.account.balance.assertEquals(this.account.balance.get()); // Verifies current state
        amount.assertLt(this.account.balance.get())

        // Send money
        this.send({
            to: receiverAddress,
            amount,
        });
    }
}