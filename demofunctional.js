"use strict";
 
let age=12;
 
if(age<18)
{
   
   var exmaination= function ()
     {
        console.log("welcome you all and wait for your turn!");
     };
 
     
}
else
{
    var exmaination=function()
     {
        console.log("welcome you all and you are all eligible to write the exam!");
     };
     
}
 
exmaination();

let multiline=(x,y)=>
{
let sum=x+y;
return sum;
};
console.log(multiline(100,120));
