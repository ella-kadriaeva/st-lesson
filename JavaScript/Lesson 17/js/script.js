// const API_URL = "https://api.escuelajs.co/api/v1";
const API_URL = "https://react-shop-backend.liara.run";

const state = {
    categories: [],
    products: [],
    allProducts: [],
    carts: []
}

function loading(){
    let loader = document.querySelector(".loading");

    if(loader){
        loader.remove()
    }else {
        document.body.insertAdjacentHTML(
            "beforeend",
            `  <div class="loading">
                    <div class="loader"></div>
                </div>
            `
        )
    }
}

async function fetchCategories() {
    try {
        loading()

        let res = await fetch(`${API_URL}/categories`);

        let data = await res.json();

        state.categories.push(...data.slice(0, 5).map((item, index) => ({ ...item, active: index === 0 })));
    } catch (err) {
        console.error("При загрузке категории произошла ошибка!");
    }  finally {
        loading()
    }
}

async function fetchCategoryById(categoryId) {
   

    try {
        // let res = await fetch(`${API_URL}/categories/${categoryId}/products`);
        if(state.allProducts.length === 0){
            let res = await fetch(`${API_URL}/products`);

            let data = await res.json();

            state.allProducts = data;
    
            state.products = [...data.filter(item => item.category.id === categoryId)];
        }else {
            loading();

            setTimeout(()=>{
                state.products = [...state.allProducts.filter(item => item.category.id === categoryId)];

                loading()
            }, 1000)
        }

    } catch (err) {
        console.error("При загрузке категории произошла ошибка!");
    }
}

function createCategoryItem() {
    if (state.categories.length > 0) {
        let categories = document.querySelector(".navbar ul");

        categories.innerHTML = '';

        state.categories.forEach(category => {
            categories.insertAdjacentHTML(
                "beforeend",
                `
                    <li>
                        <a href="#" data-id="${category.id}" class="navbar__item ${category.active ? "navbar__item-active" : ""}" onclick="handleCategoryClick(${category.id})">${category.name}</a>
                    </li>
                `
            )
        })
    }
}

function checkCategoryItemActive(categoryId){
    state.categories = state.categories.map(item => ({ ...item, active: item.id === categoryId }));

    document.querySelectorAll(".navbar__item").forEach(item => {
        item.classList.remove("navbar__item-active");

        if (+item.getAttribute("data-id") === categoryId) {
            item.classList.add("navbar__item-active")
        }
    })
}

async function handleCategoryClick(categoryId) {
    await fetchCategoryById(categoryId);
    checkCategoryItemActive(categoryId);
    createProductsItem();
}

function createProductsItem(){
    let products = document.querySelector(".products");

    products.innerHTML = "";

    state.products.forEach(product => {
        products.insertAdjacentHTML(
            "beforeend",
            `
                <div class="item">
                    <img src="${product.images[0]}" alt="" class="item-image">

                    <h2 class="item-title">${product.title}</h2>
                    <p class="item-desc">${product.description.substring(0, 30)}... <a href="" class="item-more">Read More</a></p>

                    <ul class="item-categories">
                        <li>${product.category.name}</li>
                    </ul>

                    <div class="item-footer">
                        <div class="item-price">
                            <span>Price</span>
                            <h4>$ ${product.price}</h4>
                        </div>

                        <button class="btn btn-success" onclick={addToCart(${product.id})}>Add To Cart</button>
                    </div>
                </div>
            `
        )
    })
}

function createProductsInCart() {
    let cart = document.querySelector(".cart-list");

    cart.innerHTML = "";

    state.carts.forEach(product => {
        cart.insertAdjacentHTML(
            "beforeend",
            `
               <div class="item">
                    <img src="${product.images[0]}" alt="">

                    <div class="item__content">
                        <h2>${product.title}</h2>

                        <h4>$ ${product.price * product.count}</h4>

                        <div class="item__count">
                            <button onclick="removeFromCart(${product.id})">-</button>
                            <input type="text" value="${product.count}">
                            <button onclick="addToCart(${product.id})">+</button>
                        </div>
                    </div>
                </div>
            `
        )
    })

    getTotalPrice();
}

function addToCart(productId){
    let productInclude = state.carts.find(item => item.id === productId);

    if(productInclude){
        state.carts = state.carts.map(item => {
            if(item.id === productId){
                return  ({...item, count: item.count + 1})
            }

            return item;
        })
    }else {
        let foundProduct = state.allProducts.find(item => item.id === productId);

        if(foundProduct){
            state.carts.push({...foundProduct, count: 1})
        }
    }

    createProductsInCart()
}

function getTotalPrice(){
    let total = document.querySelector(".cart-total span");

    total.innerHTML = `$ ${state.carts.reduce((acc, current) => acc += (current.price * current.count), 0)}`
}

function removeFromCart(productId){
    state.carts = state.carts.map(item => {
        if(item.id === productId){
            return  ({...item, count: item.count - 1})
        }

        return item;
    }).filter(item => item.count >= 1);

    createProductsInCart()
}

async function render() {
    await fetchCategories();
    createCategoryItem();
    await fetchCategoryById(1);
    createProductsItem()
}

render()
