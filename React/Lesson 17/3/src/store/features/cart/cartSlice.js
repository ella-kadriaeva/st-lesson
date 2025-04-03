import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.data = state.data.filter(product => product.id !== action.payload);
    },
  },
})


export const { addToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer