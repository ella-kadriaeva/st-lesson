function maxNumber() {
    let num1 = +document.querySelector(".input-1").value;
    let num2 = +document.querySelector(".input-2").value;
    // let result;
    // if(num1 > num2){
    //     result = num1
    // }else {
    //     result = num2
    // }

    let result = num1 > num2 ? num1 : num2;

    console.log(result)
}

function max3Number() {
    let num1 = +document.querySelector(".input-1").value; // 3
    let num2 = +document.querySelector(".input-2").value; // 5
    let num3 = +document.querySelector(".input-3").value; // 2

    // if( num1 > num2 ){
    //     result = num1
    // }else {
    //     result = num2
    // }

    // if(result < num3){
    //     result = num3
    // }

    let result = num1 > num2 ? num1 : num2 > num3 ? num2 : num3

    console.log(result)
}


function getExamResult(){
    let exam1 = document.querySelector(".exam-1");
    let exam2 = document.querySelector(".exam-2");
    let exam3 = document.querySelector(".exam-3");
    let exam4 = document.querySelector(".exam-4");
    let exam5 = document.querySelector(".exam-5");

    let score = 0; // 2

    if(exam1.value === "11"){
        score = score + 2;

        exam1.style = "border: 1px solid green"
    }else {
        exam1.style = "border: 1px solid red"
    }

    if(exam2.value === "25"){
        score = score + 2;

        exam2.style = "border: 1px solid green"
    }else {
        exam2.style = "border: 1px solid red"
    }

    if(exam3.value === "4"){
        score = score + 2;

        exam3.style = "border: 1px solid green"
    }else {
        exam3.style = "border: 1px solid red"
    }

    if(exam4.value === "10"){
        score = score + 2;

        exam4.style = "border: 1px solid green";
    }else {
        exam4.style = "border: 1px solid red"
    }

    if(exam5.value === "50"){
        score = score + 2;

        exam5.style = "border: 1px solid green"
    }else {
        exam5.style = "border: 1px solid red"
    }

    document.querySelector(".result-score").innerText = `Score: ${score}`;
}




// function increment(){
//     let count = 0; // local

//     count = count + 1;

//     document.querySelector(".result-count").innerText = `Count: ${count}`;
// }


let count = 0; //global

function increment(){

    count = count + 1;

    document.querySelector(".result-count").innerText = `Count: ${count}`;
}

function decrement(){

    count = count - 1;

    document.querySelector(".result-count").innerText = `Count: ${count}`;
}

function checking(){
    let color;
    count = count + 1;

    if(count % 2 === 0){
        console.log(count, "is Even!")

        color = "green";
    }else {
        console.log(count, "is Odd!")

        color = "red";
    }

    document.querySelector(".result-checking").style.color = color;
    document.querySelector(".result-checking").innerText = `Count: ${count}`;
}

// let x = 0;
//     x = x + 1;
//     x += 1;
//     x++;

// let y = 0;
//     y = y - 1;
//     y -= 1;
//     y--;

let image = document.querySelector(".gallery img");
let isToggle = true;

function zoom(){
    // if(isToggle){
    //     image.style.width = "250px";
    //     image.style.height = "250px";

    //     isToggle = false;
    // }else {
    //     image.style.width = "200px";
    //     image.style.height = "200px";

    //     isToggle = true;
    // }


    image.style = isToggle ? "width:250px;height:250px;" : "width:200px;height:200px;";

    isToggle = !isToggle;
}

// for (let i = 0; i < 10; i++) {
//     document.write(`<h1> ${i} </h1>`)
// }

// let i = 0;
// for (; i < 10; ) {
//     document.write(`<h1> ${i} </h1>`)
//     i++  
// }


// let iCount = 0;

// for (let i = 1; i < 99; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         iCount++;

//         console.log(i);
//     }
// }

// console.log(iCount);


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         document.write("*&nbsp;&nbsp;")
//     }  
//     document.write("<br>")
// }


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5 - i; j++) {
//         document.write("*&nbsp;&nbsp;")
//     }  
//     document.write("<br>")
// }

// 00
// 01
// 02
// 03
// 04
// 10
// 11
// 12
// 13
// 14
// 20


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         for (let k = 0; k < 5; k++) {
//             console.log(i, j ,k)
//         }  
//     }  
// }

// 0 0 1
// 0 0 2
// 0 0 3
// 0 0 4
// 0 1 0

let i = 6;
while(i < 5) {
    console.log(i)

    i++;
}

// let i = 6;
// do {
//     console.log(i)

//     i++;
// }while (i < 5)


for (let i = 0; i < 10; i++) {
   if(i % 2 === 0) continue;

   console.log(i)
}