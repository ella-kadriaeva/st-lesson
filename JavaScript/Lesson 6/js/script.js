// function showMessage(){
//     console.log("Hello world !!!");
// }

// showMessage();


function calcSum(firstArg = 0, secondArg = 0) {

    // if(!firstArg || !secondArg){
    //     firstArg = 0;
    //     secondArg = 0;
    // }

    console.log("First Argument", firstArg);
    console.log("Second Argument", secondArg);

    console.log("Result:", firstArg + secondArg)
}

// calcSum(2, 3);
// calcSum(10, 30);
// calcSum(60, 70);
// calcSum();

function multiply(a, b){
    let result = a * b; // 5 * 5

    // console.log(result);

    return result; // 25
}

// let x = multiply(5, 3); // 25
// console.log(x); // 15


// const add = function(a, b){
//     return a + b
// }

// const add = (a, b) => {
//     return a + b
// }

// const add = (a, b) => a + b;
// console.log(add(5,3));


// getMax(5, 3);


// const getMax = (a, b) => a > b ? a : b;
// console.log(getMax(getMax(1, 2), getMax(3, 4)));


// function getNumbers(...arguments){
//     console.log(arguments)
// }

// getNumbers(5, 6, 7);


// function externalF(){
//     let externalValue = "This is external funcion!";

//     return function internal(){
//         let internalValue = "This is internal funcion!";

//         console.log("External:", externalValue)
//         console.log("Internal:", internalValue)
//     }
// }

// externalF()()

// let internalFunc = externalF();

// internalFunc()

// function counterExt(){
//     let count = 0;

//     return function counter(){
//         count++;

//         console.log(count)
//     }
// }

// let counter = counterExt();

// counter()



// let counter = 0;

// function getCount(){
//     counter++;

//     return counter;
// }

// console.log(getCount());
// console.log(getCount());
// console.log(getCount());


// function count(){
//     let counter = 0; // 1 2

//     console.log("external");

//     return function () {
//         console.log("internal");

//         counter++;

//         return counter;
//     }
// }

// let getCount = count();

// getCount();
// getCount();



// function externalF(){
//     let externalValue = "This is external funcion!";

//     return function () {
//         let internalValue = "This is internal funcion!";

//         console.log("External:", externalValue)
//         console.log("Internal:", internalValue)
//     }
// }

// let func = externalF();

// func()

// "This is external funcion!"
// "This is internal funcion!"
//  ""



// let cars = ["BMW", "Mercedes", "Audi", "Opel"];

// let mofifiedCars = cars.map(function(car){
//     return car.toUpperCase();
// })

// console.log(mofifiedCars)

// let mofifiedCars = cars.map(item => item.toUpperCase());
// console.log(cars, mofifiedCars)

// let numbers = [2,4,5,6];

// getSquare(5)


// const getSquare = (num) => num**2;

// function getSquare(num){
//     return num**2
// }

// let squareNumbers = numbers.map(getSquare)
// console.log(squareNumbers)


let numbers = [2,4,5,6];

function customMap(arr, callback){
    let newArray = [];

    // for (let i = 0; i < arr.length; i++) {
    //     let item = arr[i];

    //     newArray.push(callback(item))
    // }

    arr.forEach(item => {
        newArray.push(callback(item))
    })

    return newArray;
}

// console.log(customMap(numbers, (num) => num**2))


let cars = ["BMW", "Mercedes", "Audi", "Opel"];

// let filteredCars = cars.filter(car => car[0] === "A");
// let filteredCars = cars.filter(car => car.includes("E"));
let search = "E";

let filteredCars = cars.filter(car => car.toLowerCase().includes(search.toLowerCase()));
console.log(filteredCars)

// let filteredCars = cars.filter(function(car){
//     return car[0] === "A"
// })
// console.log(filteredCars);
