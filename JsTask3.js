//1.Printing Numbers

for (let i = 1; i <= 20; i++) {
       console.log(i);
}

//0utput
// 1,2,3,4,5,6,7,8,9,10

// 2.Odd Numbers
// Odd Numbers from 1 to 50
for(let i = 1; i <= 50; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

//output
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 21
// 23
// 25
// 27
// 29
// 31
// 33
// 35
// 37
// 39
// 41
// 43
// 45
// 47
// 49

//3.Multiplication table
// Multiplication Table of 7
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

//output
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// 4.Reverse Counting
let i = 20;

while(i >= 1) {
    console.log(i);
    i--;
}
//output
// 20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1


//5.Sum of Numbers from 1 to 100
let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);
//output
//5050

// 6.Array Loop
let fruits = ["apple","banana","orange","grapes"];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// output
// apple
// banana
// orange
// grapes

// 7.Count Even Numbers
let count = 0;

for(let i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        count++;
    }
}

console.log(count);
//output
// 25

// 8.Star Pattern
for(let i = 1; i <= 5; i++) {
    let star = "";

    for(let j = 1; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}
// output
// *
// **
// ***
// ****
// *****

// 9.Simple Function
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();

// output
// Welcome to JavaScript

// 10.Function with Parameter
function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");

// output
// Hello Naveen

// 11.Add Two Numbers
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// output
// 30

// 12.Salary Bonus
function totalSalary(salary, bonus) {
    return salary + bonus;
}

console.log(totalSalary(50000, 5000));

// output
// 55000

// 13.Object Loop
let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
};

for(let key in student) {
    console.log(key + " : " + student[key]);
}

// output
// name : Rahul
// course : JavaScript
// marks : 95

// 14.Find Largest Number
function largest(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(10, 50));

// output
// 50

// 15.Mini Employee Task
let employee = {
    name : "Sabari",
    department : "IT",
    salary : 40000
};

function bonusSalary(salary, bonus) {
    return salary + bonus;
}

console.log("Employee Name : " + employee.name);
console.log("Department : " + employee.department);
console.log("Salary : " + employee.salary);
console.log("Salary after bonus : " + bonusSalary(employee.salary, 5000));

// output
// Employee Name : Sabari
// Department : IT
// Salary : 40000
// Salary after bonus : 45000