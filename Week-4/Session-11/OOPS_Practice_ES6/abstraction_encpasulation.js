class BankAccount {

    // declaring private variables
    #accountNumber
    #balance
    #accountHolderName

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber
        this.#balance = balance
        this.#accountHolderName = accountHolderName        
    }

    getAccountNumber() {
        return this.#accountNumber
    }

    setAccountNumber(accountNumber) {
        this.#accountNumber = accountNumber        
    }
    
    getBalance() {
        return this.#balance
    }

    setBalance(balance) {
        this.#balance = balance
    }

    getAccountHolderName() {
        return this.#accountHolderName
    }

    setAccountHolderName(accountHolderName) {
        this.#accountHolderName = accountHolderName
    }
}

class CheckingAccount extends BankAccount {

    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName)      
    }

    deposit(money) {
        super.setBalance(super.getBalance() + money)
    }

    withdraw(money) {
        super.setBalance(super.getBalance() - money)
    }

    getBalance() {
        return super.getBalance()
    }
}

class SavingsAccount extends BankAccount {

    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName)      
    }

    deposit(money) {
        super.setBalance(super.getBalance() + money)
    }

    withdraw(money) {

        if ((super.getBalance() - money) > 0)        
            super.setBalance(super.getBalance() - money)
        else 
            console.log("Transaction failed due to low balance");
    }

    getBalance() {
        return super.getBalance()
    }
}

let checking = new CheckingAccount(125, 50000, "Dheepak")
let savings = new SavingsAccount(56, 100000, "Max")

console.log("Checking Account Balance for " + checking.getAccountHolderName() + ": " + checking.getBalance());
checking.deposit(5000)
console.log("After deposit of 5000: ", checking.getBalance());
checking.withdraw(2000)
console.log("After withdraw of 2000: ", checking.getBalance());
console.log("--------------------------------------");
console.log("Savings Account Balance for " + savings.getAccountHolderName() + ": " + savings.getBalance());
savings.deposit(17000)
console.log("After deposit of 17000: ", savings.getBalance());
savings.withdraw(50000)
console.log("After withdraw of 50000: ", savings.getBalance());
console.log("When trying to withdraw more than balance ammount : ");
savings.withdraw(100000)