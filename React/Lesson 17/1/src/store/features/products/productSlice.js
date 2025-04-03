import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  categoriesData: [],
  productsData: []
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
    fetchProductsByCategory: (state, action) => {
      state.productsData = state.data.filter(product => product.categoryId === action.payload || action.payload === "all")
    }
  },
})


// Action creators are generated for each case reducer function
export const { initData, initCategories, fetchProductsByCategory } = productSlice.actions

export default productSlice.reducer