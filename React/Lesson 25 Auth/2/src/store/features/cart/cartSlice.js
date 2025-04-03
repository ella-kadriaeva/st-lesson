import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  data: []
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initDataFromLocalStorage: (state) => {
      const cart = localStorage.getItem('cart');

      if (cart) {
        state.data = JSON.parse(cart);
      }
    },
    addToCart: (state, action) => {
      let foundProduct = state.data.find(product => product.id === action.payload.id);

      if (foundProduct) {
        state.data = state.data.map(product => product.id === action.payload.id ? { ...product, count: product.count + 1 } : product);
      } else {
        state.data.push({ ...action.payload, count: 1 });
      }


      localStorage.setItem('cart', JSON.stringify(state.data));
    },
    removeProductFromCart: (state, action) => {
      let foundProduct = state.data.find(product => product.id === action.payload);

      if (foundProduct) {
        state.data = state.data.map(product => {
          if (product.id === action.payload) {
            product.count -= 1;

            if (product.count === 0) {
              return null
            }
          }

          return product;
        }).filter(product => product);
      }

      localStorage.setItem('cart', JSON.stringify(state.data));
    },
    removeProductFromCartAll: (state, action) => {
      state.data = state.data.filter(product => product.id !== action.payload);

      localStorage.setItem('cart', JSON.stringify(state.data));
    },
    removeAllProduct: state => {
      state.data = [];

      localStorage.setItem('cart', JSON.stringify(state.data));
    }
  },
})


export const { addToCart, removeProductFromCart, initDataFromLocalStorage, removeAllProduct, removeProductFromCartAll } = cartSlice.actions

export default cartSlice.reducer