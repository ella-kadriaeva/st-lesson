
// let numbers = [10, 20, 30, 5];

// function customFilter(arr, callback){
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if(callback(arr[i])){
//             newArray.push(arr[i])
//         }
//     }

//     return newArray;
// }

// console.log(customFilter(numbers, num => num >= 20))


// let numbers = [10, 20, 30, 5];

// numbers = numbers.sort((a, b) => a - b);
// numbers = numbers.sort((a, b) => b - a);
// console.log(numbers);


// numbers = numbers.every(num => num % 2 === 0);
// numbers = numbers.some(num => num % 2 === 0);
// console.log(numbers);


// let numbers = [10, 20, 30, 5];

// function getSum(arr) {
//     let initalValue = 0;

//     arr.forEach(current => {
//         initalValue += current;
//     });

//     return initalValue;
// }

// console.log(getSum(numbers))


// let numbers = [10, 20, 30, 5];

// let result = numbers.reduce((initValue, current) => {
//     return initValue + current
// }, 0)

// let evens = numbers.reduce((initValue, curr)=>{
//     if(curr % 2 === 0){
//         initValue.push(curr);
//     }

//     return initValue;
// },[])

// console.log(result);
// console.log(evens);

// let numbers = [10, 20, 30, 5];

// function customReducer(arr, callback, initalValue){
//     let acc = initalValue !== undefined ? initalValue : arr[0];
    
//     let startIndex = initalValue !== undefined ? 0 : 1;

//     for (let i = startIndex; i < arr.length; i++) {
//         acc = callback(acc, arr[i])
//     }

//     return acc;
// }

// console.log(customReducer(numbers, (initValue, current) => initValue + current, 0));


// let str = "apple,banana,orange";
// str = str.split(",");

// str = str.join("-")
// console.log(str)

// str = str.toUpperCase();
// str = str.toLowerCase();
// console.log(str)

// console.log(str.startsWith("b"))
// console.log(str.startsWith("a"))
// console.log(str.startsWith("a", 2))
// console.log(str.startsWith("p", 2))

// let str = " Hello ";
// console.log(str.length);

// let newStr = str.trim();
// let newStr = str.trimRight();
// let newStr = str.trimLeft();
// console.log(newStr.length)


// function changeRegister(str){
//     str = str.split(""); // ["a", "n", "n", "a"]

//     for (let i = 0; i < str.length; i++) {
//         if(i % 2 === 0){
//             str[i] = str[i].toUpperCase();
//         }else {
//             str[i] = str[i].toLowerCase();
//         }
//     }

//     return str.join("")
// }

// console.log(changeRegister("anna")); // aNnA


// let str = "Hello, world... hello Javascript... Hello frontend!"

// str = str.replace(/Hello/, "hi");
// str = str.replace(/Hello/gi, "hi");
// console.log(str)


let str = "You can call this number 15465464564";
let regexp = /call/g;

console.log(regexp.test(str))
console.log(regexp.test(/hello/g))

// str = str.replace(/[0-9]/g, "*")
// console.log(str)

str = str.substring(1, 10);
console.log(str)