function Person(name) {
  this.name = name;
}
const p1 = new Person("Harsh");
console.log(p1.constructor === Person);
console.log(p1.constructor === Object);


const obj1 = { name: "Harsh" };
console.log(obj1.hasOwnProperty("name"));     
console.log(obj1.hasOwnProperty("name1")); 


console.log(Object.prototype.isPrototypeOf(p1)); 


const obj2 = { age: 22 };
console.log(obj2.propertyIsEnumerable("age"));     
console.log(obj2.propertyIsEnumerable("age1")); 



const num = 1234567.89;
console.log(num.toLocaleString("en-IN")); 
console.log(num.toLocaleString("de-DE")); 
const date = new Date("2025-08-25T15:30:00");
console.log(date.toLocaleString("en-US")); 
console.log(date.toLocaleString("hi-IN")); 



console.log({}.toString());          
console.log([1, 2, 3].toString());   
console.log(Object.prototype.toString.call([1,2,3])); 
console.log(Object.prototype.toString.call(123));     
console.log(Object.prototype.toString.call(null));    



const numObj = new Number(42);
console.log(numObj.valueOf());
const strObj = new String("hello");
console.log(strObj.valueOf()); 
const obj3 = { x: 10 };
console.log(obj3.valueOf());   
