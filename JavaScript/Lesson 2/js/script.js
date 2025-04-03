function getNumber() {
    let num = +document.querySelector(".input-1").value; // 4569

    // let a = parseInt(num / 1000) // 4569/1000 = 4 * 1000
    // let b = parseInt((num - a * 1000) / 100); // (4569 - 4 * 1000) / 100 = 569 / 100 = 5.69
    // let c = parseInt((num - (a * 1000) - (b * 100)) / 10); // 4569 - 4000 - 500 = 69 / 10 = 6.9
    // let d = num % 10; 

    let a = parseInt(num / 1000)
    let b = parseInt(num / 100)


    document.querySelector(".result-1").innerText = `${a}, ${b}, ${c}, ${d}`
}

function checkNumber() {
    let num = +document.querySelector(".input-2").value;
    let result;

    if (num > 0) {
        console.log("The number is positive!");

        // document.querySelector(".result-2").innerText = "The number is positive!";

        result = "The number is positive!"
    } else if (num < 0) {
        console.log("The number is negative!");

        // document.querySelector(".result-2").innerText = "The number is negative!";
        result = "The number is negative!"
    } else {
        console.log("The number is zero!");

        // document.querySelector(".result-2").innerText = "The number is zero!";

        result = "The number is zero!"
    }

    document.querySelector(".result-2").innerText = result;
}


function getMaxTwo(){
    let num1 = +document.querySelector(".input-3").value; // 5
    let num2 = +document.querySelector(".input-4").value; // 6
    let result;

    if(num1 > num2){
        result = `${num1} > ${num2}`;
    }else if (num1 < num2){
        result = `${num1} < ${num2}`;
    }else {
        result = `${num1} = ${num2}`;
    }

    document.querySelector(".result-3").innerText = result;
}

function getMaxThree(){
    let num1 = +document.querySelector(".input-5").value; // 5
    let num2 = +document.querySelector(".input-6").value; // 6
    let num3 = +document.querySelector(".input-7").value; // 8
    let result;

    if(num1 > num2){ 
        result = num1;
    }else{
        result = num2;
    }

    if(num3 > result){
        result = num3
    }

    document.querySelector(".result-4").innerText = result;
}

// &&
// ||

let a = 10;
let b = 20;
let c = false;

console.log(a && b); // 20
console.log(c && b); // false

console.log(a || b); // 10
console.log(c || b); // 20