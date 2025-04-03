// alert("Ok");

// console.log("Check in console");

// document.write("Document Write");

// document.write("<h1>Document Write</h1>");

// let age;
// console.log(age);

// let age = 25;
// console.log(age);

// Правильно
// let age;
// let user1;
// let $color;
// let _size;
// let userName;

// Неправильно
// let 1age;
// let my-name;

// Нельзя
// let let;
// let const;
// let var;
// let for;

// let username;
// username = "John";
// console.log(username)

// let age = 20;
// let username = "John"

// let age = 20, username = "John";

// console.log(username, age);
// console.log(username + age);
// console.log(username + " " + age);
// console.log(`${username} ${age}`);

// document.write(`<h1> Hello Dear ${username} !</h1>`);

// Number
// String
// Boolean
// Object
// undefined
// null
// BigInt

// console.log(typeof "true");

// console.log(5 > 4);     // true
// console.log(1 > 2);     // false
// console.log(5 = 5);     // error
// console.log(5 == 5);    // true
// console.log(5 == "5");  // true
// console.log(5 === "5"); // false

// console.log(5 >= 5) // true
// console.log(5 <= 5) // true
// console.log(5 != 4) // true
// console.log(5 != "5") // false
// console.log(5 !== "5") // true

// console.log("5" + "4"); // 54
// console.log(5 + 3 + "2"); // 82
// console.log("8" + 1 + 1); // 811
// console.log("8" + (1 + 1)); // 82

// let x = 20;

// if(x > 2){
//     let x = "John"
//     // ...
// }

// function calculate(){
//     console.log(x + 30)
// }
// calculate();

// let age = 30;
// if(5 > 4){
//     let age = 20;
// }
// console.log(age);

// let x = 10;
//     x = 20;
//     console.log(x);

// const age = 20;
//     age = 30;
//     console.log(age)

const rate = 67000;

function exchange(){
    let moneyInput = document.querySelector(".input-1").value; // 67000

    let result = moneyInput / rate; // 67000 / 67000 = 1

    document.querySelector(".result-1").innerText = `${moneyInput}$ = ${result.toFixed(4)}BTC`
}

function exchange2(){
    let moneyInput = document.querySelector(".input-2").value;

    let result = moneyInput * rate;

    document.querySelector(".result-2").innerText = `${moneyInput}BTC = ${result}$`
}


function add(){
    let num1 = +document.querySelector(".input-3").value; //"10"
    let num2 = Number(document.querySelector(".input-4").value); //"20"

    let result = num1 + num2;

    console.log(num1, num2)
    document.querySelector(".result-3").innerText = result
}


