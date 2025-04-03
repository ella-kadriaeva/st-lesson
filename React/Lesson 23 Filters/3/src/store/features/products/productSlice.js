import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchProducts, fetchProductsByCategoryId } from '../../api/product';

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
        state.data = action.payload.map(item => ({...item, salePrice: item.price - (item.price * (item.sale / 100))}));
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }) 
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesData = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsByCategoryId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
        state.productsData = action.payload.map(item => ({...item, salePrice: item.price - (item.price * (item.sale / 100))}));
        state.loading = false;
      })
      .addCase(fetchProductsByCategoryId.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
})


// Action creators are generated for each case reducer function
export const {  } = productSlice.actions

export default productSlice.reducer