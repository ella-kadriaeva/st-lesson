// let user = {
//     name: "John",
//     age: 30
// }

// console.log(user);
// console.log(user.name);


// let user = {
//     name: "John",
//     age: 30,
//     "email address": "admin@gmail.com"
// }

// console.log(user."email address") // Error
// console.log(user["email address"])

// let newAge = "age";

// user.newAge = 20

// console.log(user)

// console.log(user.newAge)
// console.log(user[newAge])


// let user = {
//     name: "John",
//     surname: "Done",
//     address: {
//         city: "France",
//         street: "dom"
//     }
// }

// console.log(user)
// console.log(user.address)
// console.log(user.address.city)


// let name = "John";
// let surname = "Done";

// let user = {
//     name, 
//     surname
// }

// console.log(user);


// function getUserInfo(name, age){
//     return {
//         name,
//         age
//     }
// }

// let user = getUserInfo("John", 30);
// console.log(user);

// let user2 = getUserInfo("Bob", 20);
// console.log(user2);


// let user = {
//     name: "John"
// }

// user.name = "Bob";

// user["surname"] = "Done";

// user.address = {
//     city: "Paris"
// }

// console.log(user);


// let user = {
//     name: "John",
//     surname: "Done",
//     age: 30,
// }

// delete user.name;


// let userCopy = user;
// userCopy.name = "new John";

// console.log("userCopy", userCopy);
// console.log("user", user);


// let userCopy = Object.assign({}, user);

// userCopy.name = "Bob"

// console.log(userCopy)
// console.log(user)

// let user = {
//     name: "John",
//     surname: "Done",
//     age: 30,
//     address: null
// }

// console.log(user.address?.country)


// console.log([] === [])
// console.log({name: "john"} === {name: "john"})


// let user1 = {
//     name: "john"
// }

// let user2 = {
//     name: "john"
// }

// console.log(user1 === user2)

// let user3 = user1;

// console.log(user1 === user3)

// console.log(JSON.stringify(user1) === JSON.stringify(user2))

// const product = {
//     id: 1,
//     name: "Iphone 16 Pro Max",
//     price: 1800,
//     count: 10
// }

// for (const key in product) {
//     console.log(key);
//     console.log(product[key]);
// }

// const arr = [1,2,3,4,5];

// for (let item of arr) {
//     console.log(item)
// }


// const product = {
//     id: 1,
//     name: "Iphone 16 Pro Max",
//     price: 1800,
//     count: 10
// }

// const keys = Object.keys(product);
// console.log(keys);

// const values = Object.values(product);
// console.log(values);

// const entries = Object.entries(product)
// console.log(entries);


const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    }
  ]

  const filteredProducts = products.filter(item => item.price > 50);
  console.log(filteredProducts)

  const sum = products.reduce((acc, item) => acc + (item.price * item.rating.count) , 0)
  console.log(sum)

  const car1 = ["BMW", "Mercedes", "Audi"];
  const car2 = ["Opel", "Range Rover", "Lincoln"];

//   let cars = car1.concat(car2);
//   console.log(cars)

// let cars = [...car1, ...car2];
// console.log(cars)

let user = {
    name: "John",
    surname: "Done",
    address: {
        city: "France",
        street: "dom"
    }
}

// const product = {
//     title: "Iphone 16 Pro Max",
//     price: 1800,
//     count: 10
// }

// let userInfo = {...user, product: product}
// console.log(userInfo);

// let name = user.name;
// console.log(name)

// let surname = "Hello";

// let lastName = user.surname;

// let {name, surname: lastName} = user;
// let {name:nam1, surname: surname1} = user;

// console.log(name, surname, lastName)
// console.log(nam1, surname1);



const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 0,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];

const users2 = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
]

const getLoan = arr => arr.filter(({salary, age}) => salary > 200 && age >= 20);

// function getLoan(arr){
//     return arr.filter(({salary, age}) => salary > 200 && age >= 20);
// }

// console.log(getLoan(users));


function getUserNames(arr){
    arr.forEach(({lastActivity, status, username}) => {
        // if(status === "online"){
        //     console.log(`${username} is online`)
        // }

        // if(status === "offline" && lastActivity <= 10){
        //     console.log(`${username} ${lastActivity} minutes ago`)
        // }
    });

    // arr.forEach(item => {
    //     console.log(item.lastActivity, item.status)
    // });
}

getUserNames(users);


// getAverage(arr)


function getAverage(arr){
    let sum = arr.reduce((acc, item) => acc + item.price, 0)

    return sum/arr.length;
}

console.log(getAverage(products))