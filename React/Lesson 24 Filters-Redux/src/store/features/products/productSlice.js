import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchProducts, fetchProductsByCategoryId } from '../../api/product';

const initialState = {
  data: [],
  categoriesData: [],
  productsData: [],
  filterLabels: [
      {
        id: 1,
        title: 'По популярности',
        value: 'popular'
    },
    {
        id: 2,
        title: 'По возрастанию',
        value: 'price_asc'
    },
    {
        id: 3,
        title: 'По убыванию',
        value: 'price_desc'
    }
  ],
  selectedFilter: null,
  saleChecked: false,
  searchValue: "",
  priceFilter: {
    minPrice: 0,
    maxPrice: 99999999
  },
  loading: false,
  error: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsByCategory: (state, action) => {
      state.productsData = state.data.filter(product => product.categoryId === action.payload || action.payload === "all")
    },
    checkSale: (state, action) => {
      state.saleChecked = action.payload;
      
      localStorage.setItem("saleChecked", JSON.stringify(state.saleChecked))
    },
    selectFilter: (state, action) => {
      state.selectedFilter = action.payload || state.filterLabels[0];
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    changePriceFilter: (state, action) => {
        state.priceFilter =  { ...state.priceFilter, [action.payload.name]: action.payload.value }
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
export const { checkSale, selectFilter, changeSearchValue, changePriceFilter } = productSlice.actions

export default productSlice.reducer