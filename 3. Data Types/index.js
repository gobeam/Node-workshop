// Declare variable and assign value to it
let integer_value = 1;
let float_value = 2.89;
let string_value = 'hello world';
let bool_value = false;
let undefined_value;

// null value example
let null_value = null;


// Logging variable value through console.log()
console.log("==========");
console.log(integer_value);
console.log(float_value);
console.log(string_value);
console.log(bool_value);
console.log(undefined_value);
console.log("==========");

// Check data type of variable
console.log("============");
console.log(typeof integer_value);
console.log(typeof float_value);
console.log(typeof string_value);
console.log(typeof bool_value);
console.log(typeof undefined_value);
console.log("============");


// if you declare normal you can change their value easily

//Initial value and its data type
console.log(integer_value); // 1
console.log(typeof integer_value); // number

// After changing its value and data type
integer_value = 'sunday';
console.log(integer_value); // sunday
console.log(typeof integer_value); // string

// Constant are declared with const keyword.
// Once assigned value to constant it cant be changed later.
// Trying to assign its value again will throw error
const CONSTANT_VALUE = 'IIMS';
console.log(CONSTANT_VALUE);
console.log(typeof CONSTANT_VALUE);

