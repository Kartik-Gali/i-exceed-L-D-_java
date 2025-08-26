class bankaccount
{
    constructor(balance)
    {
        this.balance=balance;
    }
    deposit=function(amt){
        this.balance+=balance;
    }
    withdraw=function(amt){
        this.balance-=balance;
    }
    getBalance=function(amt){
        return this.balance;
    }
};

 
let sbibank=new bankaccount(10000);
let scbank=new bankaccount(24000);
sbibank.deposit(100000);
scbank.deposit(200000);
scbank.withdraw(2000);
scbank.withdraw(2000);

console.log(sbibank.getBalance());
console.log(scbank.getBalance());
