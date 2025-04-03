class Transport {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run() {
    console.log(`${this.name} ускоряется до ${this.speed} км/ч.`)
  }

  stop() {
    console.log(`${this.name} останавливается.`)
  }
}

// let car = new Transport("BMW", 400);
// car.run();
// car.stop();

class Car extends Transport {
  constructor(name, speed, model) {
    super(name, speed);
    this.model = model;
  }

  drift() {
    console.log(`${this.name} делает занос.`)
  }

}

// let car1 = new Car("BMW", 360, "X6");
// console.log(car1);

// car1.run();
// car1.drift();
// car1.stop();

class Motorcycle extends Transport {
  constructor(name, speed) {
    super(name, speed);
  }

  wheelie() {
    console.log(`${this.name} делает вилли.`);
  }
}

// let moto = new Motorcycle("Suzuki", 399);
// moto.run();
// moto.wheelie();

// В этом примере мы создаем базовый класс Shape, который представляет общие свойства и методы для всех фигур.
// Дочерние классы Circle и Rectangle наследуют класс Shape и расширяют его функциональность для отображения конкретных фигу
// Определение базового класса Shape


// let x = {};

// let elem = document.createElement("div");
// elem.classList.add("hello");

// document.body.append(elem);


class Shape {
  constructor(className) {
    // let divElement = document.createElement("div");
    // divElement.classList.add("shape", className)
    // this.element = divElement;

    this.element = document.createElement("div");
    this.element.classList.add("shape", className);
  }

  render() {
    document.body.append(this.element);
  }
}

let shape = new Shape("circle");
shape.render()

class Circle extends Shape {
  constructor() {
    super("circle")
  }
}

class Rectangle extends Shape {
  constructor() {
    super("rectangle");
  }
}

// let circle = new Circle();
// circle.setStyle({background: "orange"});
// circle.render();
// let rectangle = new Rectangle();


class BankAccount {
  #balance;

  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }

  get balance() {
    if (this.#balance > 0) {
      return this.#balance;
    } else {
      return "The balance is empty";
    }
  }

  set balance(value) {
    if (value > this.#balance) {
      this.#balance = value
    } else {
      alert("You can only increase the balance!")
    }
  }

  deposit(amount) {
    amount = Number(amount);

    this.#balance += amount > 0 ? amount : 0;
  }

  withdraw(amount, account) {
    if (account === this.accountNumber) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        alert("You don't have enough rights!")
      }
    } else {
      alert("Account not valid!")
    }
  }
}

let account = new BankAccount("1234567", 1000);
// console.log(account.accountNumber, account.balance);
// account.balance = 0;
// console.log(account.getBalance());

// console.log("Balance:", account.balance)

// account.balance = 0;
// console.log("Balance:", account.balance);


// account.balance = 1001;
// console.log("Balance:", account.balance);

// account.deposit(5000);

// account.balance = 0;

// console.log(account);

// account.withdraw(2000, "1234567");

// console.log(account);



