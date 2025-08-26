//function functionname(parameters)
 //{
    //body of the function
 //}
 
 let username="Harsh";
 
 function displayMe()
  {
    let username="Raj"; // local variable
    console.log("welcome\t"+username);
  }
 
  console.log(username);
  displayMe();
 
  function addition(x,y,z)
  {
    return x+y+z;
  }
  console.log(addition(1,2,3));
 
  function displayData(name,age,city="Bangalore")
  {
    console.log(name);
    console.log(age);
    console.log(city);
  }
 
  displayData("Harsh",22,"Mysuru");


let getData=(x,y)=>x+y;
console.log(getData(10,65));
 
let getMe=(x)=>x.toUpperCase();
let getMe1=(x)=>x.toLowerCase();
console.log(getMe("harsh"))
console.log(getMe1("harsh"))
 
console.log(getData(10,43));
 
let getMyMail=(name,age,city)=>name+age+city+"@"+"gmail.com";
console.log(getMyMail("harsh",22,"bangalore"));
 