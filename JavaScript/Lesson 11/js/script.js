// window
const car = {
  name: "BMW",
  model: "X6",
  date: 2020,
  getCarInfo() {
    return `${this.name} ${this.model}`;
  },
  calculateAge: function () {
    let currentYear = new Date().getFullYear();

    return currentYear - this.date;
  },
  getAllInfo() {
    return `${this.name} ${this.model} bought ${this.calculateAge()} years ago`
  },
  getName: () => {
    console.log("getName", this)
    return this.name
  }
}

const car2 = {
  name: "Mercedes",
  model: "GLE",
  date: 2020,
  getCarInfo() {
    return `${this.name} ${this.model}`;
  }
}


// console.log(car.getCarInfo());
// console.log(car2.getCarInfo());

// console.log(car.calculateAge());
// console.log(car.getAllInfo());
// console.log(car.getName());

// console.log("this", this)


const user = {
  name: "John",
  age: 25,
  getName() {
    return this.name;
  }
}

const nextUser = {
  name: "Bob",
}

let nextUserName = user.getName.call(nextUser);
// console.log(nextUserName)

// const person = {
//   firstName: "John",
//   lastName: "Done",
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const greeting = function (msg) {
//   console.log(msg, this.fullName())
// }

// greeting.call(person, "Hello");

// greeting.apply(person, ["Hi"]);

// const boundGreeting = greeting.bind(person);

// boundGreeting("Hey");



// Работа с this в объектах
// Создайте объект phone, который содержит свойства brand, model и метод getInfo,
// возвращающий строку вида: "Телефон: <brand>, Модель: <model>".

// const tablet = {
//   brand: "Samsung",
//   model: "Galaxy Tab",
// };

// Выведите информацию о телефоне.
// Используйте call для вывода информации о планшете.


// const phone = {
//   brand: "Apple",
//   model: "Iphone 16 pro max",
//   getInfo() {
//     return `Телефон: ${this.brand}, Модель: ${this.model}`
//   }
// }

// const tablet = {
//   brand: "Samsung",
//   model: "Galaxy Tab",
// };

// console.log(phone.getInfo());
// console.log(phone.getInfo.call(tablet));



// Использование apply
// Создайте объект student со следующими свойствами:
// firstName: "Alice"
// lastName: "Johnson"
// getFullName: метод, возвращающий полное имя студента.
// Создайте функцию introduce, которая принимает приветственное сообщение и выводит:
// "<Сообщение>, меня зовут <Имя> <Фамилия>".
// Задачи:
// Используйте метод apply для вызова функции introduce с объектом student.
// Передайте массив с сообщением в качестве аргумента.

// const student = {
//   firstName: "Alice",
//   lastName: "Johnson",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// function introduce(msg, index) {
//   return `${msg}, меня зовут ${this.getFullName()}`;
// }


// console.log(introduce.call(student, "Hi"));
// console.log(introduce.apply(student, ["Привет"]));


// Создайте объект calculator с методами:
// a и b (числовые свойства, значения можно задать произвольно).
// Метод sum, возвращающий сумму a и b.
// Создайте объект calc2 с другими числами для свойств a и b.
// Задачи:
// Используйте call, чтобы вызвать метод sum объекта calculator для объекта calc2.

// const calculator = {
//   a: 10,
//   b: 25,
//   sum(){
//     return this.a + this.b;
//   }
// }

// const calculator2 = {
//   a: 5,
//   b: 3,
// }

// console.log(calculator.sum.call(calculator2));


function person(name, age) {
  let temp = {};

  temp.name = name;
  temp.age = age;
  temp.getPersonInfo = function () {
    return `Hello ${this.name}!`
  }

  return temp;
}

let user1 = {
  name: "John",
  age: 20,
  getPersonInfo: function () {
    return `Hello ${this.name}!`
  }
}


let user2 = person("Bob", 25);

// console.log("user1",user1)
// console.log("user2",user2)

function User(username, age){

  // this = {...this, username: "", age: 20}

  this.username = username;
  this.age = age;

  // this.getPersonInfo = function () {
  //   return `Hello ${this.username}!`
  // }
}

User.prototype.getPersonInfo = function () {
  return `Hello ${this.username}!`
}

let user3 = new User("John", 20);
console.log(user3)

let user5 = new User("Jasy", 20);
console.log(user5)


class Car {
  constructor(brand, model){
    this.brand = brand;
    this.model = model;

    // this.getPersonInfo = function () {
    //   return `Hello ${this.username}!`
    // }
  }

  getCarInfo() {
    return `Car: ${this.brand}!`
  }
}

let car1 = new Car("BMW", "X6");
console.log(car1.brand)
console.log(car1.getCarInfo())