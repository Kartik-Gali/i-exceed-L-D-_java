// creating object by literal
const student={name:"Harsh",age:22,department:"ise",isAvail:true}
console.log(student);
// creating object by constructor (object)
const student1=new Object();
student1.name="mateen";
student1.age=22;
student1.department="ise";
student1.isAvail=true;
console.log(student1);


const customer={
               customername:"Harsh",
               customerid:12324,
               customerac:
               {
                          accountname:"harsh",
                          bankname:"sbi",
                          balance:6565767,
                          deposit:function(amt)
                                {
                                     return this.balance+=amt;  
                                },
                                withdraw:function(amt)
                                {
                                    return this.balance-=amt;
                                }
                                }
                };
 
console.log(customer.customerac.deposit(10000));
console.log(customer.customerac.withdraw(20000));
console.log(customer.customerac.balance);