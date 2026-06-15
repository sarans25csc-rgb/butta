//let
let studentcount = 10;
studentcount = 11;
console.log("student count:", studentcount);
//const
const collegename = "vetias";
console.log("college name:", collegename);
//template literals
let studentname = "arun";
console.log('welcome ${student} to ${collegename}');
//object
const student = {
    name: "arun",
    age: 20,
    department: "IT"
};
//destructuring
const { name, age, department } = student;
console.log("name:", name);
console.log("age:", age);
console.log("department:", department);
//arrow function
const displaystudent = () => {
    console.log('student name: ${name}');
};
displaystudent();
//arrays
const students = [
    "Arun",
    "Priya",
    "Devadharshini"
];
console.log(students);
//spread operator
const updatedstudent = [
    ...students,
];
console.log("updatedstudents");
// // rest operator
function maximummarks(...marks){
    let max = Math.max(...marks);
    return max;
}
console.log("maximum marks:",maximummarks(80,90,70));
