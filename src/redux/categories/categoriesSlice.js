/*
  Archivo: src/redux/categories/categoriesSlice.js
  Descripción: Redux slice de categorías.
*/

import { createSlice } from "@reduxjs/toolkit";
import { categories as initialCategories } from "../../data";

const initialState = {
  items: initialCategories,
  activeCategory: "all",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.items;
export const selectActiveCategory = (state) => state.categories.activeCategory;
export default categoriesSlice.reducer;
