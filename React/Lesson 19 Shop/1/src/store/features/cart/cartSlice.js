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

      if(foundProduct){
        state.data = state.data.map(product => product.id === action.payload.id ? {...product, count: product.count + 1} : product);
      }else {
        state.data.push({...action.payload, count: 1});
      }


      localStorage.setItem('cart', JSON.stringify(state.data));
    },
    removeProductFromCart: (state, action) => {
      state.data = state.data.filter(product => product.id !== action.payload);

      localStorage.setItem('cart', JSON.stringify(state.data));
    },
  },
})


export const { addToCart, removeProductFromCart, initDataFromLocalStorage } = cartSlice.actions

export default cartSlice.reducer