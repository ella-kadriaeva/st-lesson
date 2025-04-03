import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  categoriesData: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initData: (state, action) => {
      state.data = action.payload;
    },
    initCategories: (state, action) => {
      state.categoriesData = action.payload;
    },
  },
})


// Action creators are generated for each case reducer function
export const { initData, initCategories } = productSlice.actions

export default productSlice.reducer