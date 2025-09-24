abstract class Account {
  protected balance: number = 0;

  constructor(public owner: string) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }

  abstract withdraw(amount: number): void;
}

export class CheckingAccount extends Account {
  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    if (this.balance < amount) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
}

export class SavingsAccount extends Account {
  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    if (this.balance < amount || this.balance - amount < 100)
      throw new Error("Insufficient funds");
    this.balance -= amount;
  }
}

const c = new CheckingAccount("Alice");
c.deposit(500);
c.withdraw(200);
console.log(c.getBalance()); // 300

const c2 = new SavingsAccount("Alice");
c2.deposit(500);
c2.withdraw(450); // error Invalid amount balance will drop less than 100
console.log(c2.getBalance()); // 300
