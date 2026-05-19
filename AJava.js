// 1.Username uppercase
async function getUsers() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let users = await response.json();

    let upperCaseUsers = users.map(user => user.username.toUpperCase());

    console.log(upperCaseUsers);
}

getUsers();

//output= (10) ['BRET', 'ANTONETTE', 'SAMANTHA', 'KARIANNE', 'KAMREN', 'LEOPOLDO_CORKERY', 'ELWYN.SKILES', 'MAXIME_NIENOW', 'DELPHINE', 'MORIAH.STANTON']

//2.Expensive Products
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    // Filter products price greater than 100
    let expensiveProducts = products.filter(product => product.price > 100);

    // Print result
    console.log(expensiveProducts);

  })
  .catch(error => {
    console.log("Error:", error);
  });

  
//output
//0: {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", …}
//1: {id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 695, description: 'From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.', category: 'jewelery', …}
//2: {id: 6, title: 'Solid Gold Petite Micropave ', price: 168, description: 'Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.', category: 'jewelery', …}
//3: {id: 10, title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', price: 109, description: 'Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)', category: 'electronics', …}
//4: {id: 11, title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', price: 109, description: '3D NAND flash are applied to deliver high transfer…e optimized performance and enhanced reliability.', category: 'electronics', …}
//5: {id: 12, title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', price: 114, description: "Expand your PS4 gaming experience, Play anywhere F… capacity, 3-year manufacturer's limited warranty", category: 'electronics', …}
//6: {id: 13, title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', price: 599, description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS …egree. Vertical viewing angle-178 degree 75 hertz', category: 'electronics', …}
//7: {id: 14, title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ', price: 999.99, description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR…inate motion blur, ghosting, and reduce input lag', category: 'electronics', …}
//length: 8
//[[Prototype]]: Array(0)

//3.Digital Clock
let now = new Date();

console.log(
  now.getHours() + " : " +
  now.getMinutes() + " : " +
  now.getSeconds()
);

//output=16 : 14 : 45

//4.Username Checker

let name = "   Naveen Kumar   ";

let result = name.trim();

result = result.toUpperCase();


let check = result.includes("KUMAR");

console.log(result);
console.log(check);

//output
//NAVEEN KUMAR
//true

//5.Student Rank System
let marks = [450, 300, 700, 200, 900];

marks.sort((a, b) => b - a);

let topMarks = marks.slice(0, 3);

console.log(topMarks);

//output
//[900, 700, 450]

