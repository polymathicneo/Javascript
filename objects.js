// singleton objects is created by using constructor function and new keyword
Object.create

//object literals
const JsUser = {
    name: "Neo",
    "Fullname": "Subham sedai",
    age: 20,
    location: "Nepal",
    email: "subhamreader@gmail.com"
}
//accessing objects
console.log(JsUser.name)      // we can use dot notation and bracket notation access the object properties
console.log(JsUser["name"])
console.log(JsUser["Fullname"])  // if the property name has space or special character we can use bracket notation to access the property
//we cannot use dot notation to access the property with space or special character


const symbol = Symbol("id")
//To access the symbol property we can use bracket notation
JsUser[symbol] = "1234"
console.log(JsUser[symbol])

//creating function inside the variable
JsUser.greeting = function(){
    console.log("hello js user")
}
console.log(JsUser.greeting())  // we can call the function inside the object using dot notation

JsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`) // we can use this keyword to access the object properties inside the function
}   // we use string interpolation to access the object properties inside the function
console.log(JsUser.greeting2())