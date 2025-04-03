// console.log("Start");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("End");

// setTimeout(()=>{
//   console.log("setTimeout 1")
// }, 3000);

// console.log("log")

// setTimeout(()=>{
//   console.log("setTimeout 2")
// }, 4000);

// setTimeout 1 log setTimeout 2
// log setTimeout 1 setTimeout 2


// const foo = () => console.log("1")
// const bar = () => console.log("2")
// const bar = () => setTimeout(() => console.log("2"), 2000)
// const baz = () => console.log("3")

// foo();
// bar();
// baz();

// 1 3 2


const first = () => console.log("1")
const second = () => setTimeout(() => console.log("2"), 2000)
const third = () => {
  console.log("3");

  Promise.resolve().then(() => {
    console.log("Third promise 1")
  })

  Promise.resolve().then(() => {
    console.log("Third promise 2")
  })
}
const fourth = () => console.log("4")

// first();
// second();
// third();
// fourth();

// 1, 3, 4, Third promise 1, Third promise 2, 2 x3
// 1, 4, 2, 3, Third promise 1, Third promise 2
// 1, 4, 3, Third promise 1, Third promise 2, 2 x2


// console.log("Start");

// const promise1 = new Promise((resolve, rej) => {
//   console.log(1);

//   resolve(2);
// })

// promise1.then(x => {
//   console.log(x);
// })

// console.log("End");

// Start 1 End 2



// console.log("Start");

// const promise1 = new Promise((resolve, rej) => {
//   console.log(1);

//   resolve(2);

//   console.log(3);
// })

// promise1.then(x => {
//   console.log(x);
// })

// console.log("End");

// Start, 1, 3, End, 2

// console.log("Start");

// const promise1 = new Promise((resolve, rej) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log("End");

// Start 1 End

// ------------------

// console.log("Start");

// const fn = () => new Promise((resolve, rej) => {
//   console.log(1);

//   resolve("success")
// })

// console.log("middle")

// fn().then(res => {
//   console.log(res)
// })

// console.log("End");


// console.log('start')

// Promise.resolve(1).then((res) => {
//     console.log(res)
// })

// Promise.resolve(2).then((res) => {
//     console.log(res)
// })

// console.log('end')

// start end 1 2



// const promise = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//   }, 0);
  
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(3);



const fetchData = () => {
  console.log("Запрос на сервер ...");

  let user = {}

  function fetchUser(){
    return new Promise((resolve)=>{
      setTimeout(()=> {
        console.log("Данные подгружаются ...");
    
        user = {
          username: "John",
          surname: "Done"
        }
    
        

        resolve(user)
      }, 1500)
    })
  }

  function getUser(){
    return new Promise((resolve)=>{

      setTimeout(()=> {
          console.log("Изменение данных ...");
          resolve(user.username)
      }, 1000)

    })
  }

  fetchUser()
    .then((user)=>{
      console.log("Данные подгрузились:", user);

      return getUser();
    })
    .then((username)=>{
      console.log("Обновленные данные", username);
    })
}


// fetchData()


// const foo = () => console.log("1")
// const bar = () => new Promise((resolve)=>{
//   setTimeout(() => {
//     resolve("2")
//   }, 2000)
// })
// const baz = () => console.log("3")

// foo();
// bar().then((res)=>{
//     console.log(res)

//     baz()
//   })


// async function render() {
//   foo();
//   console.log(await bar());
//   baz()
// }

// render()

let user = {
  username: "John",
  surname: "Done"
}


// localStorage.setItem("username", "John");
// localStorage.setItem("user", JSON.stringify(user));

// console.log(JSON.parse(localStorage.getItem("user")));

document.querySelector(".inputValue").addEventListener("keyup", function(e){
  localStorage.setItem("username", e.target.value);
})

document.querySelector(".inputValue").value = localStorage.getItem("username");


document.querySelector(".btn").onclick = () => {
  localStorage.removeItem("username");
  document.querySelector(".inputValue").value = "";
}

// localStorage.clear()



let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
let p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
let p5 = new Promise((resolve, reject) => {
  // Этот промис прервёт Promise.all
  reject("reject");
});


// Promise.all([p1, p2, p3, p4]).then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   },
// );

Promise.race([p1, p2, p3, p4, p5]).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  },
);