import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../../api/product';

const initialState = {
  data: [],
  categoriesData: [],
  productsData: [],
  loading: false,
  error: null,
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
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
})


// Action creators are generated for each case reducer function
export const { initData, initCategories, fetchProductsByCategory } = productSlice.actions

export default productSlice.reducer