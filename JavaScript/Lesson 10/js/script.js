let store = [
  {
    id: "1",
    title: "SteelSeries New Apex 9 Mini",
    price: 91.70,
    image: "https://m.media-amazon.com/images/I/710tFiQvqaL._AC_UY218_.jpg",
  },
  {
    id: "2",
    title: "ASUS ROG Azoth 75%",
    price: 247,
    image: "https://m.media-amazon.com/images/I/61E5W37UANL._AC_UY218_.jpg",
  },
  {
    id: "3",
    title: "Razer Ornata V3",
    price: 37.99,
    image: "https://m.media-amazon.com/images/I/71pqfvJKW5L._AC_UY218_.jpg",
  },
  {
    id: "4",
    title: "Logitech G PRO Mechanical",
    price: 430.80,
    image: "https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_UY218_.jpg",
  },
  {
    id: "5",
    title: "Razer BlackWidow V4",
    price: 159.99,
    image: "https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_UY218_.jpg",
  },
  {
    id: "6",
    title: "SteelSeries USB Apex Pro ",
    price: 132.5,
    image: "https://m.media-amazon.com/images/I/811-0kItnvL._AC_UY218_.jpg",
  },
];

let cartItems = [];



{/* <div class="item">
  <h2 class="item__title">Razer Ornata V3</h2>
  <img src="https://m.media-amazon.com/images/I/71YW8+KhOwL._AC_UY218_.jpg" alt="Razer Ornata V3 Gaming"
      class="item__img">
  <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, minus!</p>
  <h4 class="item__price">$69.00</h4>
  <button class="btn">Buy</button>
</div> */}

function createProductItem(arr) {
  arr.forEach(item => {
    let elementItem = document.createElement("div"); // <div></div>
    elementItem.classList.add("item") // <div class="item"></div>

    let elementTitle = document.createElement("h2"); // <h2></h2>
    elementTitle.classList.add("item__title"); // <h2 class="item__title"></h2>
    elementTitle.innerText = item.title; // <h2 class="item__title">SteelSeries New Apex 9 Mini</h2>

    let elementImage = document.createElement("img"); //  <img src="" />
    elementImage.classList.add("item__img");
    elementImage.src = item.image;

    // elementImage.setAttribute("src", item.image);

    let elementDesc = document.createElement("p");
    elementDesc.classList.add("item__description");
    elementDesc.innerText = "Lorem ipsum dolor sit amet";

    let elementPrice = document.createElement("h4");
    elementPrice.classList.add("item__price");
    elementPrice.innerText = `$${item.price}`;

    let elementButton = document.createElement("button");
    elementButton.classList.add("btn");
    elementButton.innerText = "Buy";
    elementButton.onclick = () => addToCart(item.id)


    // elementItem.append(elementTitle, elementImage, elementDesc, elementPrice, elementButton);

    // document.querySelector(".products").append(elementItem);


    document.querySelector(".products").insertAdjacentHTML(
      "beforeend",
      `
        <div class="item">
          <h2 class="item__title">${item.title}</h2>
          <img src="${item.image}" alt="${item.title}" class="item__img">
          <p class="item__description">Lorem ipsum dolor sit amet</p>
          <h4 class="item__price">$${item.price}</h4>
          <button class="btn" onclick="addToCart(${item.id})">Buy</button>
        </div> 
      `
    )
  });
}

function createProductCart(arr){
  document.querySelector(".cart").innerHTML = ""

  arr.forEach((item)=>{
    document.querySelector(".cart").insertAdjacentHTML(
      'beforeend',
      `
       <div class="item">
            <img src="${item.image}" alt="" class="item__img">
            <div>
                <h2 class="item__title">${item.title}</h2>
                <h4 class="item__price">$${item.price}</h4>
                <button class="btn btn-remove" onclick="removeFromCart(${item.cartId})">Удалить</button>
            </div>
        </div>
      `
    )
  })
}

function removeFromCart(productId){
  cartItems = cartItems.filter(item => +item.cartId !== productId);

  createProductCart(cartItems);
}

function removeFromCartV2(productId){
  cartItems = cartItems.filter(item => +item.cartId !== productId);

  document.querySelectorAll("[data-id]").forEach(item => {
    if(+item.getAttribute("data-id") === productId){
      item.remove();
    }
  })
}


function addToCart(productId){
  const findElement = store.find(item => +item.id === productId);
  // {
  //   id: "1",
  //   title: "SteelSeries New Apex 9 Mini",
  //   price: 91.70,
  //   image: "https://m.media-amazon.com/images/I/710tFiQvqaL._AC_UY218_.jpg",
  // }

  let cartId = Date.now(); // 1321321654654

  cartItems.push({...findElement, cartId}); // [] --- > {id: "1",title: "SteelSeries New Apex 9 Mini", ..., cartId: 1321321654654}

  createProductCart(cartItems);

  // document.querySelector(".cart").insertAdjacentHTML(
  //   'beforeend',
  //   `
  //    <div class="item" data-id="${cartId}">
  //         <img src="${findElement.image}" alt="" class="item__img">
  //         <div>
  //             <h2 class="item__title">${findElement.title}</h2>
  //             <h4 class="item__price">$${findElement.price}</h4>
  //             <button class="btn btn-remove" onclick="removeFromCartV2(${cartId})">Удалить</button>
  //         </div>
  //     </div>
  //   `
  // )
}

createProductItem(store)