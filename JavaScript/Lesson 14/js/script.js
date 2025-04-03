// Задание 1: Расширение функциональности

// Создайте базовый класс Animal, который имеет свойства name и метод speak() (по умолчанию выводит, что животное издает звук). +
// Создайте два дочерних класса Dog и Cat, которые переопределяют метод speak(), чтобы выводить: +
// Для собак: "Гав-гав!" +
// Для кошек: "Мяу!" +
// Добавьте в класс Animal метод move(), который выводит сообщение, как животное двигается (например, "бегает"). +
// Для каждого из дочерних классов расширьте метод move() с учетом особенностей их движения. +
// Например, кошки "крадутся", а собаки "быстро бегают". +
// Дополнительное задание: Добавьте третий класс Bird. Реализуйте метод fly() и полиморфный move().


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}  издает звук!`)
  }

  move() {
    console.log(`${this.name}  бегает`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(`${this.name} Гав-гав!`)
  }

  move() {
    console.log(`${this.name} быстро бегают!`)
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(`${this.name} Мяу!`)
  }

  move() {
    console.log(`${this.name} крадутся!`)
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(`${this.name} чирик-чирик!`)
  }

  fly() {
    console.log(`${this.name} летит!`)
  }
}

// let dog = new Dog("Рекс");
// dog.move()
// dog.speak()



// Создадим класс LibraryBook, который будет управлять книгами в библиотеке. Пользователи могут брать книги и возвращать их, а также проверять их статус (выдана/доступна), но не могут напрямую менять статус книги.
// Приватные свойства:
// Используется # перед свойствами (#title, #author, #isBorrowed) для их защиты от внешнего изменения. +
// Методы:
// getBookInfo() — возвращает информацию о книге, включая статус. +
// borrowBook() — позволяет пользователю взять книгу, изменяя статус на "выдана". +
// returnBook() — возвращает книгу, изменяя статус обратно на "доступна".
// Инкапсуляция:
// Данные книги скрыты от прямого доступа извне. Пользователи могут взаимодействовать с книгой только через публичные методы.

class LibraryBook {
  #title;
  #author;
  #isBorrowed;

  constructor(title, author) {
    this.#title = title;
    this.#author = author;
    this.#isBorrowed = false;
  }

  getBookInfo() {
    return `Называние книги: ${this.#title}, Автор: ${this.#author}, ${this.#isBorrowed ? "Выдана" : "Доступно"}`
  }

  borrowBook() {
    if (this.#isBorrowed) {
      return `Книга уже выдана.`
    } else {
      this.#isBorrowed = true;
    }
  }

  returnBook() {
    if (this.#isBorrowed) {
      this.#isBorrowed = false;
    } else {
      return `Книга уже находится в библиотеке.`
    }
  }

}




let book1 = new LibraryBook("Самый богатый человек в вавилоне", "Джордж Самюэль Клейсон");

// console.log(book1.getBookInfo())
// console.log(book1.borrowBook());
// console.log(book1.returnBook());



// Магазин товаров

// Создайте базовый класс Product, который имеет свойства:
// name (название товара), price (цена), category (категория) +
// Метод getDiscountPrice(discount) возвращает цену товара с учетом скидки. +
// 2. Создайте дочерние классы:
// Electronics, который добавляет свойство warranty (гарантия в месяцах). +
// Clothing, который добавляет свойство size (размер). +
// Food, который добавляет свойство expirationDate (дата истечения срока годности). +
// 3. Создайте массив из 10 товаров разных категорий и напишите функцию, которая фильтрует товары по категории и считает их общую стоимость.
// Дополнительное задание: Добавьте метод isExpired() в класс Food, который проверяет, просрочен ли продукт.


class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDiscountPrice(discount) {
    return this.price - (this.price * discount) / 100;
  }
}


class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price, "Electronics");

    this.warranty = warranty;
  }
}

class Clothing extends Product {
  constructor(name, price, size) {
    super(name, price, "Clothing");

    this.size = size;
  }
}

class Food extends Product {
  constructor(name, price, expirationDate) {
    super(name, price, "Food");

    this.expirationDate = new Date(expirationDate);
  }

  isExpired() {
    return new Date() > this.expirationDate;
  }
}

const products = [
  new Electronics("Телефон", 500, 24),
  new Electronics("Ноутбук", 1200, 36),
  new Clothing("Рубашка", 50, "M"),
  new Clothing("Джинсы", 80, "L"),
  new Food("Яблоки", 5, "2024-11-30"),
  new Food("Молоко", 2, "2024-11-15"),
  new Food("Хлеб", 1, "2024-11-22"),
  new Electronics("Телевизор", 800, 18),
  new Clothing("Куртка", 150, "XL"),
  new Food("Сыр", 10, "2024-12-05")
];

function filterByCategory(products, category) {
  return products.filter(item => item.category.toLowerCase() === category.toLowerCase());
}

function calculateTotal(products) {
  return products.reduce((acc, curr) => acc += curr.price, 0)
}

const filteredFood = filterByCategory(products, "Food");

filteredFood.forEach(item => {
  console.log(`${item.name} ${item.isExpired() ? "просрочен" : "не просрочен"}`);
});

console.log(calculateTotal(filteredFood));

console.log("Цена со скидкой 10% для телефона:", products[0].getDiscountPrice(10));




// Основные требования:
// Создайте класс Room с приватными свойствами:

// #roomNumber — номер комнаты.
// #price — цена за ночь.
// #isAvailable — статус доступности номера (по умолчанию true).
// #guestName — имя гостя, если номер забронирован (если номер свободен — null).
// Реализуйте публичные методы в классе Room:

// bookRoom(guestName) — бронирует номер для указанного гостя, если номер доступен.
// cancelBooking() — отменяет бронирование номера, делая его снова доступным.
// getRoomDetails() — возвращает информацию о номере: его номер, цену и статус.
// Создайте класс BookingSystem с приватным свойством:

// #rooms — массив объектов Room.
// Реализуйте публичные методы в классе BookingSystem:

// addRoom(roomNumber, price) — добавляет новый номер в систему бронирования. +
// viewAvailableRooms() — возвращает список всех доступных номеров. +
// bookRoom(roomNumber, guestName) — бронирует номер для гостя.
// cancelBooking(roomNumber) — отменяет бронирование для конкретного номера.
// getBookingDetails(roomNumber) — возвращает информацию о бронировании конкретного номера.


class Room {
  #roomNumber;
  #price;
  #isAvailable;
  #guestName;

  constructor(roomNumber, price) {
    this.#roomNumber = roomNumber;
    this.#price = price;
    this.#isAvailable = true;
    this.#guestName = null;
  }

  bookRoom(guestName) {
    if (!this.#isAvailable) {
      console.log(`Номер ${this.#roomNumber} уже забронирован.`);
    } else {
      this.#isAvailable = false;
      this.#guestName = guestName;

      console.log(`Номер ${this.#roomNumber} забронирован для ${guestName}`);
    }
  }

  cancelBooking(){
    if(this.#isAvailable){
        console.log(`Номер ${this.#roomNumber} уже свободен.`);

        return;
    }

    this.#isAvailable = true;
    console.log(`Бронирование номера ${this.#roomNumber} отменено.`)
    this.#guestName = null;
  }

  getRoomDetails() {
    return {
      roomNumber: this.#roomNumber,
      price: this.#price,
      isAvailable: this.#isAvailable,
      guestName: this.#guestName,
    }
  }
}


class BookingSystem {
  #rooms;

  constructor() {
    this.#rooms = [];
  }

  addRoom(roomNumber, price) {
    let room = new Room(roomNumber, price);

    this.#rooms.push(room);

    console.log(`Номер ${roomNumber} добавлен в систему!`)
  }

  viewAvailableRooms() {
    let availableRooms = this.#rooms.filter(room => room.getRoomDetails().isAvailable)

    availableRooms.forEach(room => {
      console.log(`Номер ${room.getRoomDetails().roomNumber} доступен, Цена: ${room.getRoomDetails().price}`)
    })
  }

  bookRoom(roomNumber, guestName) {
    const findRoom = this.#rooms.find(room => room.getRoomDetails().roomNumber === roomNumber);

    if (!findRoom) {
      console.log(`Номер ${roomNumber} не найден!`);

      return;
    }

    findRoom.bookRoom(guestName);
  }

  cancelBooking(roomNumber) {
    const findRoom = this.#rooms.find(room => room.getRoomDetails().roomNumber === roomNumber);

    if (!findRoom) {
      console.log(`Номер ${roomNumber} не найден!`);

      return;
    }

    findRoom.cancelBooking();
  }

  getBookingDetails(roomNumber) {
    const findRoom = this.#rooms.find(room => room.getRoomDetails().roomNumber === roomNumber);

    if (!findRoom) {
      console.log(`Номер ${roomNumber} не найден!`);

      return;
    }

    console.log(findRoom.getRoomDetails());
  }
}


const bookingSystem = new BookingSystem(); // []

bookingSystem.addRoom(101, 3000);
bookingSystem.addRoom(102, 4000);
bookingSystem.addRoom(103, 2500);

bookingSystem.viewAvailableRooms();

bookingSystem.bookRoom(101, "John Done");
bookingSystem.getBookingDetails(101);

bookingSystem.cancelBooking(101);