const course = { //This is an object called course
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "John doe"
}
console.log(course.courseInstructor) // This is how we access the value of courseInstructor and normal property calling from object property in the course object
 
//now we use object destructure
 const {courseInstructor} = course // This is how we access the value of courseInstructor property in the course object using object destructuring
 console.log(courseInstructor) // Output: John doe

// also we can give alias name to the property while destructuring
const{courseInstructor: instructor} = course // Here we are giving alias name to the property courseInstructor as instructor
console.log(instructor) // Output: John doe

//Learning JSON 
{
    "name": "Neo Sedai",
    "age": 20,
    "address": "Nepal"
}
 // This is also valid JSON object inside the array
[
    {},
    {},
    {}
]
