console.log("welcome to primitive datatypes")
//numbers
console.log("DT numbers");
var age = 30;
console.log(age);// output: 30
//string
console.log("DT string");
var name = "jhon";
console.log(name);// output: jhon
//booleans
console.group("DT booleans");
var isstudent = true;
console.log(isstudent);// output: true
//null
console.log("DT null");
var address = null;
console.log(address);//output: null
//undefined
console.log("DT undefined");
var phone;
console.log("phone");//output: undefined
//symbols
console.log("DT symbols");
var symbolvalue = Symbol('value');
console.log(symbolvalue);//output: symbol(symbol)
//bigint
console.log("DT bigint");
var bigintvalue = 9007199254740991n;
console.log(bigintvalue);//output: 9007199254740991n
console.log("welcome to non primitive datatypes");
//objects
console.log("DT objects");
var person ={
    name:"jhon",
    age: 30};
console.log(person.age);//output:{name: "jhon", age: 30}
//arrays
console.log("DT arrays");
var numbers =["apple","orange","pine","fig","kiwi"];
console.log(numbers[4]);//output fig
