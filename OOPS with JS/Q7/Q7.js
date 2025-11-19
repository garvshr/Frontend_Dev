class BankAccount {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }
    withdraw(amount) {
        if (amount > this.#balance) throw new Error('Insufficient balance');
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(100);
console.log('Balance after deposit:', account.getBalance()); // 100
account.withdraw(50);
console.log('Balance after withdraw:', account.getBalance()); // 50
try {
    account.withdraw(60);
} catch (error) {
    console.log(error.message);
}