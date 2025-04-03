// let numbers = [-10, 5, -2, 0, 60, 80, 90];
// const numbers = [-10, 25, -30, 5, 9, 11, 20];

function indexSearch() {
    let num1 = +document.querySelector(".input-1").value;

    document.querySelector(".result-1").innerText = `Индекс введенного числа ${numbers.indexOf(num1)}`
}

function findNumber() {
    let num1 = +document.querySelector(".input-2").value;
    let findElement = numbers.includes(num1);

    document.querySelector(".result-2").innerText = findElement ? 'Число есть в массиве' : 'Число отсутствует'
}


function calculateSum() {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    document.querySelector(".result-3").innerText =  `Сумма чисел = ${sum}`;
}

function getPositiveNumbers() {
    let positiveNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0){
            positiveNumbers.push(numbers[i])
        }
    }

    document.querySelector(".result-4").innerText =  `Положительные числа = ${positiveNumbers}`;
}

let numbers = [-10, 5, -2, 0, 60, 80, 90];
// const numbers = [-10, 25, -30, 5, 9, 11, 20];

function findSecondLargest(){
    let max = 0; // 0 5 60 80 90
    let secondLargest = 0; // 0 5 60 80

    for (let i = 0; i < numbers.length; i++) {
       if(numbers[i] > max){
            secondLargest = max;

            max = numbers[i]; 
       }else if(numbers[i] > secondLargest && numbers[i] < max){
            secondLargest = numbers[i];
       }
    }

    console.log(max, secondLargest)
}

// let numbers = [-10, 5, -2, 0, 60, 80, 90];

function swapNumber() {
    let maxIndex = 0; //6
    let minIndex = 0; //0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[4] > numbers[maxIndex]) {
            maxIndex = i;
        }

        if (numbers[i] < numbers[minIndex]) {
            minIndex = i;
        }
    }

    let temp = numbers[maxIndex];
    numbers[maxIndex] = numbers[minIndex];
    numbers[minIndex] = temp;
}


function secondLargest() {
    let max = 0;
    let min = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        } else if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    
    let indexMax = numbers.indexOf(max);
    let indexMin = numbers.indexOf(min);
    numbers[indexMax] = min;
    numbers[indexMin] = max;
    console.log(numbers);
}