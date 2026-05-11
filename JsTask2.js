//ask 1 – Predict the Output

console.log("10" + 5);      
// Output: "105"
// Datatype: string

console.log(10 + true);        
// Output: 11
// Datatype: number

console.log(false + null);    
// Output: 0
// Datatype: number

console.log("Hello" + undefined); 
// Output: "Helloundefined"
// Datatype: string

console.log([1,2] + 5);        
// Output: "1,25"
// Datatype: string

//task 2 – Implicit Type Casting

// String + Number
let a = "Age: " + 25;
console.log(a);
console.log(typeof a);

// Boolean + Number
let b = true + 10;
console.log(b);
console.log(typeof b);

// Array + String
let c = [1,2,3] + " JavaScript";
console.log(c);
console.log(typeof c);

// Object + Number
let d = {} + 5;
console.log(d);
console.log(typeof d);

// Null + Number
let e = null + 10;
console.log(e);
console.log(typeof e);
// Output

//Age: 25
//string

// 11
//number

// 1,2,3 
//string

// [object object]5
// string

// 10
// number
//Task 3 – Explicit Type Casting

console.log(Number("500"));    
console.log(Number(true));     
console.log(Number(false));    
console.log(Number(null));     
console.log(Number("abc"));    
console.log(Number([100]));
//Output

// 500
// 1
// 0
// 0
// NaN
// 100

//Task 4 – Boolean Constructor

console.log(Boolean(""));           
console.log(Boolean("javascript")); 
console.log(Boolean(0));            
console.log(Boolean(1));            
console.log(Boolean(null));         
console.log(Boolean(undefined));    
console.log(Boolean([]));           
console.log(Boolean({}));
//Output

// false
// true
// false
// true
// false
// false
// true
// true

//Task 5 – Student Pass or Fail

let mark = 45;

if (mark > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
//Output

// Pass
//Task 6 – Voting Eligibility

let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
//Output

//Eligible

//Task 7 – Greatest Number

let a2 = 50;
let b3 = 80;
let c4 = 30;

if (a2 > b3 && a2 > c4) {
    console.log("A is greatest");
} else if (b3 > a2 && b3 > c4) {
    console.log("B is greatest");
} else {
    console.log("C is greatest");
}
//Output

// B is greatest

//Task 8 – Traffic Light System

let signal = "red";

switch(signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//Task 9 – Login System

let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Username");
}
//Output

// Login Success

//Task 10 – Session Finder

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
}
else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
}
else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
}
else if (hour >= 20 && hour <= 24) {
    console.log("Night");
}
else {
    console.log("Invalid Hour");
}
//Output

// Afternoon
// Bonus Challenge 

console.log(true + true);      
// 2

console.log("5" - 2);               
// 3

console.log("5" + 2);          
// "52"

console.log(null + 1);         
// 1

console.log(undefined + 1);    
// NaN

console.log(Boolean(" "));     
// true

console.log(Number(true));     
// 1
