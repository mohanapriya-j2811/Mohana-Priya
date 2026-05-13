//1. Username function
function welcomeUser(name) {
    console.log(`Welcome ${name}`);
}

welcomeUser("Naveen");

//Output=Welcome Naveen

//2.Square number function
function squareNumber(num) {
    return num ** 2;
}

console.log(squareNumber(5)); 

//Output=25

//3.Object Function

// 3. Object Function

const employee = {
    name: "Rahul",
    salary: 50000,

    employeeBonus: function(bonus) {
        let totalSalary = this.salary + bonus;
        console.log("Name: " + this.name);
        console.log("Total Salary: " + totalSalary);
    }
};

employee.employeeBonus(5000);

// Output:
// Name: Rahul
// Total Salary: 55000

//4.Scope Checking


var a = "VAR Variable";

function checkScope() {
    let b = "LET Variable";
    const c = "CONST Variable";

    console.log(a);
    console.log(b);
    console.log(c);
}

checkScope();

// Output:
// VAR Variable
// LET Variable
// CONST Variable



//5.Arrow function
const add = (a, b) => {
    console.log(a + b);
};

add(10, 20);

//output=30

//6.callback function
function multiply(a, b) {
    console.log(a * b);
}

function calculator(callback, num1, num2) {
    callback(num1, num2);
}

calculator(multiply, 10, 5);

//output=50

//7. Generator Function
function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

//output
//50% OFF
//Free Delivery
//Cashback

//8.Default parameter
function student(name, course = "JavaScript") {
    console.log("Name: " + name);
    console.log("Course: " + course);
}

student("Rahul");

//output
//Name: Rahul
//Course: JavaScript

//9.Currying
function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));

//output = 24

//10.spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);

//output
//[1, 2, 3, 4, 5, 6]

//11.Object Spread - Merge two objects

const obj1 = { name: "Navi" };
const obj2 = { role: "Developer" };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);

// Output:
// { name: 'Navi', role: 'Developer' }

//12.Rest Operator

function numbers(...num) {
    console.log(num);

    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    console.log(sum);
}

numbers(1, 2, 3, 4);

// Output:
// [1, 2, 3, 4]
// 10

//Mini Challenge

// Student Management System

// Student Array
let students = [];

// 1. Add Student (Rest Operator - multiple subjects marks)
function addStudent(name, age, ...marks) {
    const student = {
        name: name,
        age: age,
        marks: marks
    };
    students.push(student);
    console.log(` Student Added: ${name}`);
}

// 2. Print All Students (Callback)
function printStudents(callback) {
    console.log("\n Student List:");
    console.log("================");
    students.forEach(callback);
}

// 3. Calculate Total Marks
function calculateMarks(student) {
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    const avg = total / student.marks.length;
    console.log(` Name: ${student.name} | Age: ${student.age}`);
    console.log(`   Marks: [${student.marks}]`);
    console.log(`   Total: ${total} | Average: ${avg.toFixed(2)}`);
    console.log("----------------");
}

// 4. Add Bonus Marks (Spread Operator)
function addBonusMarks(studentName, bonusMarks) {
    const student = students.find(s => s.name === studentName);
    if (student) {
        student.marks = [...student.marks, bonusMarks];
        console.log(`\n Bonus ${bonusMarks} marks added to ${studentName}`);
    } else {
        console.log(` Student ${studentName} not found!`);
    }
}


// Adding Students
addStudent("Sabari",   20, 85, 90, 78);
addStudent("Dharun",  22, 70, 65, 80);
addStudent("Priya",  21, 95, 88, 92);

// Print + Calculate Marks (Callback)
printStudents(calculateMarks);

// Add Bonus Marks
addBonusMarks("Dharun", 10);
addBonusMarks("Sabari",  5);

// Print Again After Bonus
printStudents(calculateMarks);

// Output:
// =============================
//  Student Added: Sabari
//  Student Added: Dharun
// Student Added: Priya
//
// Student List:
// ================
// 👤 Name: Sabari  | Age: 20
//    Marks: [85,90,78]
//    Total: 253 | Average: 84.33
// ----------------
// 👤 Name: Dharun | Age: 22
//    Marks: [70,65,80]
//    Total: 215 | Average: 71.67
// ----------------
// 👤 Name: Priya | Age: 21
//    Marks: [95,88,92]
//    Total: 275 | Average: 91.67
// ----------------
//
// Bonus 10 marks added to Dharun
//  Bonus 5 marks added to Sabari
//
//  Student List (After Bonus):
// ================
// 👤 Name: Sabari  | Age: 20
//    Marks: [85,90,78,5]
//    Total: 258 | Average: 64.50
// ----------------
// 👤 Name: Dharun  | Age: 22
//    Marks: [70,65,80,10]
//    Total: 225 | Average: 56.25
// ----------------
// 👤 Name: Priya | Age: 21
//    Marks: [95,88,92]
//    Total: 275 | Average: 91.67
// ----------------
