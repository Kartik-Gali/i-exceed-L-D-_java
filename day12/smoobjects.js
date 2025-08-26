let target = { a: 1 };
let source1 = { b: 2 };
Object.assign(target, source1);//Object.assign(target, ...sources):copies properties from source objects into a target object.
console.log("assign:", target);


let human = { type: "male" };
let chotu = Object.create(human);//Object.create(proto):create a new object into specific prototype
human.name = "chotu";
console.log("create:", human.name, human.type);


let prop = {};
Object.defineProperty(prop, "name", {//Object.defineProperty(obj, prop, descriptor):defines a new property on an object with detailed descriptors.
  value: "Harsh",
  writable: true,
  enumerable: true,
});
prop.name="raj"
console.log("defineProperty:", prop.name);


let person = {};
Object.defineProperties(person, {//Object.defineProperties(obj, props):defines multiple properties at once
    name: { value: "Harsh", writable: true },
    age: { value: 22, writable: false },
    name1:{value:"raj"},
});
console.log("defineProperties:", person);


console.log("entries:", Object.entries({ a: 1, b: 2 }));//Object.entries(obj):return key value pairs as an array


let entries = [["x", 100], ["y", 120]];
console.log("fromEntries:", Object.fromEntries(entries));//Object.fromEntries(iterable):converts key value pairs into object


let car = { brand: "mercedes" };
Object.freeze(car);
car.brand = "BMW"; 
console.log("freeze:", car);//Object.freeze(obj):freezes an object(no new properties ,no modification)


console.log("getOwnPropertyDescriptor:", Object.getOwnPropertyDescriptor(prop, "name"));//Object.getOwnPropertyDescriptor(obj, prop):return descriptor of the property 


console.log("getOwnPropertyDescriptors:", Object.getOwnPropertyDescriptors(person));//Object.getOwnPropertyDescriptors(obj):returns all property descriptors


let obj1 = Object.create({}, { hidden: { value: 42, enumerable: false } });
obj1.visible = "Hi";
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(obj1));//Object.getOwnPropertyNames(obj):returns an array of all property names


let sym = Symbol("id");
let obj2 = { [sym]: 123, name: "Harsh" };
console.log("getOwnPropertySymbols:", Object.getOwnPropertySymbols(obj2));//Object.getOwnPropertySymbols(obj):returns an array of symbol keys


console.log("getPrototypeOf:", Object.getPrototypeOf(chotu) === human);//Object.getPrototypeOf(obj):returns the prototype of an object


console.log("hasOwn:", Object.hasOwn(prop, "name"), Object.hasOwn(prop, "toString"));//Object.hasOwn(obj, prop):returns true if object has the prototype of an object


console.log("is:", Object.is(NaN, NaN), Object.is(+0, -0), Object.is(5, 5));//Object.is(value1, value2):compares if two values are the same(like === but handles NaN and 0)


let obj3 = {};
console.log("isExtensible:", Object.isExtensible(obj3));
Object.preventExtensions(obj3);//Object.isExtensible(obj):checks if new properties can be added
console.log("isExtensible after prevent:", Object.isExtensible(obj3));


console.log("isFrozen:", Object.isFrozen(car));//Object.isFrozen(obj): checks if object is frozen


let obj4 = {};
Object.seal(obj4);//Object.seal(obj):Seals an object (can’t add/remove props but can modify existing)
console.log("isSealed:", Object.isSealed(obj4));//Object.isSealed(obj):checks if object is sealed


console.log("keys:", Object.keys({ a: 1, b: 2 }));//Object.keys(obj):returns an array of enumerable property names


let obj5 = { a: 1 };
Object.preventExtensions(obj5);//Object.preventExtensions(obj):prevents new properties from being added
obj5.b = 2; 
console.log("preventExtensions:", obj5);


let obj6 = { a: 1 };
Object.seal(obj6);//Object.seal(obj):seals an object(can't add/remove props but can modify existing)
obj6.a = 2;
delete obj6.a; 
console.log("seal:", obj6);


let motu = { jumps: true };
Object.setPrototypeOf(motu, human);//Object.setPrototypeOf(obj, prototype):sets the prototype of an object
console.log("setPrototypeOf:", motu.type, motu.jumps);


console.log("values:", Object.values({ a: 1, b: 2, c: 3 }));//Object.values(obj)::returns an array of enumerable property

