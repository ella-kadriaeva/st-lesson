import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  data: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push({...action.payload, cartId: uuidv4()});
    },
    removeProductFromCart: (state, action) => {
      state.data = state.data.filter(product => product.cartId !== action.payload);
    },
  },
})


export const { addToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer