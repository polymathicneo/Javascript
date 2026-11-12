let score = 33

console.log(typeof score);     // we can use both typeof score and typeof(score) to get the type of variable. Both will return the same result.
console.log(typeof(score));
let score2 = "33"

console.log(typeof score2);
console.log(typeof(score2));

// to change the type of variable we can use the Number() and String() functions
let ValueinNumber = Number(score2)
console.log(typeof ValueinNumber);

let score3 = "33abc" //This is a string
let ValueinNumber2 = Number(score3)
console.log(typeof ValueinNumber2); // this will return number but the value will be NaN because ing cannot be converted to a number
console.log(ValueinNumber2); // this will return NaN because it cannot be converted to a number

let score4 = null
console.log(score4);
console.log('\n',typeof score4); // this will return object because null is an object in javascript
let ValueinNumber3 = Number(score4);

let score5 = undefined
console.log(score5);
console.log('\n',typeof score5);
/* "33" given as string will be converted to number 33
"33abc" given as string will be converted to NaN because it cannot be converted to a number
null will be converted to 0
undefined will be converted to NaN
*/
let value = 1
let booleanValue = Boolean(value) // this will return true because 1 is a truthy value
console.log(booleanValue);

let number = 2
let stringValue = String(number) 
console.log(stringValue); // this will return "2" because 2 is a number and it will be converted to string
console.log(typeof stringValue); // this will return string because the value is now a string