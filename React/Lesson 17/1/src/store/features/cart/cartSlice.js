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
    }
  },
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer