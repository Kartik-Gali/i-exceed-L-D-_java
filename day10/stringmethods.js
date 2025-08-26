let a=new String("thing");
console.log(a);


console.log(String.fromCharCode(189, 43, 190, 61));


console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));


const filePath = String.raw`C:\Development\profile\about.html`;
console.log(`The file was uploaded from: ${filePath}`);


const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);


index=4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
index=6;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);


const index1 = 4;
console.log(
  `Character code ${sentence.charCodeAt(index1)} is equal to ${sentence.charAt(index1,)}`,);


const icons = "☃★♲";
console.log(icons.codePointAt(1));


const str10 = "Harsh";
const str20 = "Raj";
console.log(str10.concat(" ", str20));


const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
 
let str="To be, or not to be, that is the Question.";
console.log(str.includes("To be", 0)); // at which index to start searching
 
console.log("hello world".indexOf("e",-23));
 
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];
for (const str of strings) {
  console.log(str.isWellFormed());
}


const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
console.log(`Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,);
 


let regex= /[A-Z]/g;
console.log(str.match(regex)); 
 
console.log(str.split(""));
 
let strobj = new String("String object");
console.log(strobj);
console.log(strobj.toString());
for (const str of strings) {
	 console.log(str.toWellFormed());
}

 


