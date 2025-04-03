import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
            const response = await fetch("/products.json");

            let data = await response.json();

            console.log(data);

            return data
    }
);