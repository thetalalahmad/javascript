// destructuring 

const course ={
    courseName : "js in hindi",
    coursePrice : "999",
    courseInstructure : "hitesh"
}
//method 1
// const {courseInstructure} = course
// console.log(courseInstructure);
//method 2 
const {courseInstructure : instructor} = course
console.log(instructor);
//