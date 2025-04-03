function checkEvenOdd() {
    let num1 = document.querySelector(".input-1").value;
    let result;

    if (num1 % 2 === 0) {
        console.log(`Число ${userInput} является четным`);

        result = `Число ${userInput} является четным`;
    } else {
        console.log(`Число ${userInput} является не четным`);

        result = `Число ${userInput} является не четным`;
    }

    // result = num1 % 2 === 0 
    // ? `Число ${userInput} является четным`
    // : `Число ${userInput} является не четным`;

    document.querySelector(".result").innerText = result;
}


let galleryImage = document.querySelector(".gallery > img");
let galleryCount = 1;

function next() {
    galleryCount++;

    if (galleryCount > 5) {
        galleryCount = 1
    }

    galleryImage.src = `./image/${galleryCount}.png`
}

function prev() {

    galleryCount--;

    if (galleryCount < 1) {
        galleryCount = 5;
    }

    galleryImage.src = `./image/${galleryCount}.png`;
}

let cars = ["BMW", "Mercedes", "Volvo", "Audi"];

// console.log(cars)
// console.log(cars[0], cars[1]);

// document.write(`<ul>`)
// document.write(`<li> ${cars[0]} </li>`)
// document.write(`<li> ${cars[1]} </li>`)
// document.write(`<li> ${cars[2]} </li>`)
// document.write(`<li> ${cars[3]} </li>`)
// document.write(`</ul>`)

// document.write(`<ul>`)
// for (let i = 0; i < cars.length; i++) {
//     document.write(`<li> ${cars[i]} </li>`)
// }
// document.write(`</ul>`)

// cars.push("Ford", "Lincoln")
// console.log(cars)

// cars.pop("Ford", "Lincoln")
// console.log(cars)

// cars.unshift("Ford", "Lincoln")
// console.log(cars)

// cars.shift("Ford", "Lincoln")
// console.log(cars)

// cars[4] = "Toyota"
// console.log(cars)

const countries = ["Malta", "Greeland", "Panama", "Armenia"];
const people = [441543, 56770, 4314767, 2963243];

// for (let i = 0; i < countries.length; i++) {
//     document.write(`${countries[i]} - ${people[i]} </br>`)
// }

// countries.splice(1, 1);
// console.log(countries);

// const removeElement = countries.splice(1, 1);
// console.log(removeElement)

// countries.splice(1, 1, "France");
// console.log(countries);

// countries.splice(1, 0, "France", "China");
// console.log(countries);

// countries.splice(-1, 1);
// console.log(countries);

// let newCountry = countries.slice(1, 2);
// console.log(newCountry);
// console.log(countries);


// let newCountry = countries.slice(-2, -1);
// console.log(newCountry);

// let newCountry = countries.slice(1);
// console.log(newCountry);

// let newCountry = countries.slice();
// console.log(newCountry);

// let nextCountries = ["France", "China", "USA"];
// let newCountries = countries.concat(nextCountries);
// console.log(newCountries)

// console.log(countries.indexOf("Greeland"));
// console.log(countries.indexOf("France"));
// console.log(countries.indexOf("Greeland", 2));


// console.log(countries.includes("Greeland"));
// console.log(countries.includes("France"));
// console.log(countries.includes("Greeland",2 ));


let numbers = [10, 20, 25, 30, 5, 9, 11];
let max = numbers[0]; // 30

for (let i = 0; i < numbers.length; i++) {
    if(max < numbers[i]){ // 30 < 11
        max = numbers[i]
    }
}

console.log(max)


let evenCount = 0, oddCount = 0;

let even = [], odd = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
        evenCount++;

        console.log("evenCount:", evenCount);

        even.push(numbers[i])
    }else {
        oddCount++

        console.log("oddCount:", oddCount)

        odd.push(numbers[i])
    }
}

console.log("evenCount: " + evenCount, "oddCount: " + oddCount);

console.log("evenCount: " + even.length, "oddCount: " + odd.length);
console.log("evenCount: " + even, "oddCount: " + odd);


function buy() {
    let selected = document.querySelector(".course").value;

    console.log(selected)
}



// break
// case
// class
// catch
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// let
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield