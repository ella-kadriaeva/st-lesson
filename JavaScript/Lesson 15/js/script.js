// console.log("Начало кода!");

// for (let i = 0; i < 10; i++) {
//     console.log("i", i);
// }

// console.log("Конец кода!");


// setTimeout(() => {
//     console.log("setTimeout 1");
// }, 3000);

// console.log("log");

// setTimeout(() => {
//     console.log("setTimeout 2");
// }, 3000);


// let count = 0;

// setInterval(() => {

//     count++;

//     console.log("Count:", count)
// }, 3000);


// const data = [];

// setTimeout(()=>{
//     data.push(
//         {
//             id: 1,
//             name: "John",
//             isAdmin: false
//         },
//         {
//             id: 2,
//             name: "Bob",
//             isAdmin: true
//         },
//         {
//             id: 3,
//             name: "Anna",
//             isAdmin: false
//         }
//     )
// }, 2000);

// let searchData = data.find(user => user.id === 1);

// console.log("searchData", searchData)

// setTimeout(()=>{
//     let searchData = data.find(user => user.id === 1);

//     console.log("searchData", searchData)
// }, 3000)



// const data = [];

// function getAllUsers(){
//     return new Promise((resolve, reject)=> {

//         if(5 > 4){
//             setTimeout(()=>{
//                 data.push(
//                     {
//                         id: 1,
//                         name: "John",
//                         isAdmin: false
//                     },
//                     {
//                         id: 2,
//                         name: "Bob",
//                         isAdmin: true
//                     },
//                     {
//                         id: 3,
//                         name: "Anna",
//                         isAdmin: false
//                     }
//                 )
    
//                 resolve(data);
//             }, 2000);
//         }else {
//             reject("This is Error");
//         }

//     })
// }

// console.log(getAllUsers())

// getAllUsers()
//     .then(resolveData => {
//         console.log(resolveData);

//         return resolveData.find(user => user.id === 1)
//     })
//     .then(findUser => {
//         console.log(findUser);
//     })
//     .catch((err)=>{
//         throw new Error(err)
//     })


// function fetchData(url, ms = 2000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(`Данные с ${url}`);
//         },ms)
//     })
// }

// const url1 = "https://example.com/data1";
// const url2 = "https://example.com/data2";
// const url3 = "https://example.com/data3";


// fetchData(url1, 2000)
//     .then(res => {
//         console.log(res); //Данные с https://example.com/data1

//         return fetchData(url2, 3000)
//     })
//     .then(res => {
//         console.log(res); //Данные с https://example.com/data2

//         return fetchData(url3, 3000)
//     })
//     .then(res => {
//         console.log(res);  //Данные с https://example.com/data3
//     })
//     .catch((err)=>{
//         throw new Error(err)
//     })

// Promise.all(
//     [
//         fetchData(url1, 2000), 
//         fetchData(url2, 3000), 
//         fetchData(url3, 4000)
//     ]
// )
// .then(data => {
//     console.log("Результаты запросов:", data)
// })
// .catch(error => {
//     console.error("Произошла ошибка:", error);
// });


// Promise.race([fetchData(url1, 2000), fetchData(url2, 3000), fetchData(url3, 4000)])
//     .then(data => {
//         console.log("Результаты запросов:", data)
//     })
//     .catch(error => {
//         console.error("Произошла ошибка:", error);
//     });


// const TODOS_URL = "https://jsonplaceholder.typicode.com/users";

// const fetchData = fetch(TODOS_URL, {
//     method: "GET"
// });

// const fetchData = fetch(TODOS_URL);

// fetchData
//     .then(res => {
//         console.log(res)

//         return res.json()
//     })
//     .then(data => {
//         data.forEach(user => {
//             document.write(`<h2> ${user.name} </h2>`)
//             document.write(`<p> ${user.phone} </p>`)
//         });
//     })
//     .catch((err)=>{
//         console.error("err", err)
//     })




const products = [];

async function fetchAllProducts(){
    try{
        let res = await fetch('https://fakestoreapi.com/products');
        console.log(res);
    
        let data = await res.json();
    
        products.push(...data);
        
    }catch(err){
        console.log(err)
    }
}

async function createProducts(){
    products.forEach(item => {
        document.querySelector(".products").insertAdjacentHTML(
            "beforeend", 
            `<div class="item">
                    <img src="${item.image}" alt="">
                    <h2>${item.title}</h2>
                    <span>${item.price}$</span>
            </div>`)
    })
}

async function render(){
    await fetchAllProducts();
    await createProducts();
}

render();