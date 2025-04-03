import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        try {
            const response = await fetch("/products.json");

            let data = await response.json();

            return data
        } catch (error) {
            console.error("Error fetching products", error);

            return error;
        }
    }
);


export const fetchCategories = createAsyncThunk(
    "product/fetchCategories",
    async () => {
        try {
            const response = await fetch("/categories.json");

            let data = await response.json();

            return data
        } catch (error) {
            console.error("Error fetching products", error);

            return error;
        }
    }
);

export const fetchProductsByCategoryId = createAsyncThunk(
    "product/fetchProductsByCategoryId",
    async (categoryId) => {
        try {
            const response = await fetch("/products.json");

            let data = await response.json();

            return data.filter(product => product.categoryId === categoryId || categoryId === "all")
        } catch (error) {
            console.error("Error fetching products", error);

            return error;
        }
    }
);