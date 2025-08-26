// prototype object
const bankaccount={
    balance:1000,
    ifsc:"dg35353",
    deposit:function(amt)
            {
                this.balance+=amt;
            },
    withdraw:function(amt)
    {
        this.balance-=amt;
    },
    getBalance:function(amt)
    {
        return this.balance;
    }
 
}

 
let savingaccount=Object.create(bankaccount);
savingaccount.accno="sb111";
savingaccount.accholder="Harsh";
savingaccount.bank="sbi";
savingaccount.branch="bangalore BTM";
 
let currentaccount=Object.create(bankaccount);
currentaccount.accno="cb001";
currentaccount.accholder="Harsh";
currentaccount.bank="sbi";
currentaccount.branch="bangalore BTM";
 
console.log(savingaccount.accholder)
savingaccount.deposit(120000);
savingaccount.withdraw(21000);
savingaccount.deposit(120000);
savingaccount.withdraw(121000);

console.log(savingaccount.getBalance());
console.log(savingaccount);
console.log(bankaccount);
 
let businessbankaccount=Object.create(bankaccount,{accno:{value:"bba01",configurable:false,writable:true,enumerable:true},holder:{value:"harsh",writable:true,configurable:true,enumerable:true},balance:{value:1,writable:true,}});
businessbankaccount.accno="ba001";
businessbankaccount.holder="harsh raj";
console.log(businessbankaccount.accno);
console.log(businessbankaccount.holder);
console.log(businessbankaccount.balance);
businessbankaccount.deposit(200000);
console.log(businessbankaccount.balance);
businessbankaccount.withdraw(50001);
console.log(businessbankaccount.balance);

// In enumerable the one which we have given true will come in the loops which means it is iterable and the one which is false is not iterable 
// by default the value of enumerable is false
for (let key in businessbankaccount) {
  console.log(key); 
} 
delete businessbankaccount.holder;
delete businessbankaccount.accno;
for (let key in businessbankaccount)
    {
        
        console.log(key+":"+businessbankaccount[key]);
    }
