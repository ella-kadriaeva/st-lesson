// let element1 = document.querySelector(".item-1");
// let element2 = document.querySelector(".item-2");
// let element3 = document.querySelector(".item-3");

// console.log(element1.innerHTML);  
// console.log(element2.outerHTML);  
// console.log(element3.textContent);  


// element1.innerHTML =`<p>This is <span class="color-orange">innerHTML</span></p>`;
// element2.outerHTML =`<p>This is <span class="color-orange">outerHTML</span></p>`;
// element3.textContent =`<p>This is <span class="color-orange">textContent</span></p>`;

// let books = document.querySelector(".books");

// books.before("This is befor Element!");
// books.after("This is after Element!");

// books.prepend("This is prepend Element!");
// books.append("This is append Element!");


// let elementTitle = document.createElement("h2"); // <h2></h2>
// elementTitle.innerText = "This is append element"; // <h2>This is append element</h2>
// books.append(elementTitle);

// books.insertAdjacentHTML(
//     "beforebegin",
//     "<h2>This is beforebegin element</h2>"
// )

// books.insertAdjacentHTML(
//     "afterbegin",
//     "<h2>This is afterbegin element</h2>"
// )

// books.insertAdjacentHTML(
//     "beforeend",
//     "<h2>This is beforeend element</h2>"
// )

// books.insertAdjacentHTML(
//     "afterend",
//     "<h2>This is afterend element</h2>"
// )


// books.classList.add("active");
// books.classList.remove("active");

// books.classList.toggle("active");
// books.classList.toggle("active");

// console.log(books.classList.contains("active"));

// books.setAttribute("id", "active");
// console.log(books.getAttribute("id"))


// const button = document.querySelector(".btn");


// button.onclick = function(){
//     console.log("Click 1")
// }

// button.onclick = function(){
//     console.log("Click 2")
// }

// button.addEventListener("click", function(){
//     console.log("Click 1")
// })

// button.addEventListener("click", function(){
//     console.log("Click 2")
// })

// let count = 0;
// function showAlert() {
//     count++;

//     if (count >= 5) {
//         button.removeEventListener("click", showAlert)
//     }

//     console.log("This is alert!", count)
// }

// // button.addEventListener("click", showAlert)
// button.addEventListener("click", showAlert, { once: true })


// function showConsole(event){
//     // console.log(event)
//     console.log(event.type);

//     console.log(event.target);

//     console.log(event.currentTarget);

//     console.log(event.clientX);
//     console.log(event.clientY);
// }

// button.addEventListener("click", showConsole);

// let elem1 = document.querySelector(".elem-1");
// let elem2 = document.querySelector(".elem-2");
// let elem3 = document.querySelector(".elem-3");

// elem1.addEventListener("click", function(){
//     console.log("Clicked on elem-1")
// })

// elem2.addEventListener("click", function(){
//     console.log("Clicked on elem-2")
// }, {capture: true})

// elem3.addEventListener("click", function(event){
//     // event.stopPropagation();

//     console.log("Clicked on elem-3")
// })


let element1 = document.querySelector(".item-1");
let element2 = document.querySelector(".item-2");
let element3 = document.querySelector(".item-3");


function changeColor(event){
    // event.target.style.background = "red"

    // event.target.classList.toggle("active");
    event.currentTarget.classList.toggle("active");
}

// element1.addEventListener("click", changeColor)
// element2.addEventListener("click", changeColor)
// element3.addEventListener("click", changeColor)

// ----------------------

// const booksItems = document.querySelectorAll(".books .item");

// booksItems.forEach(item => item.addEventListener("click", changeColor));

// ----------------------


const books = document.querySelector(".books");

books.addEventListener("click", function(event){
    if(event.target.classList.contains("item")){
        event.target.classList.toggle("active");
    }
})