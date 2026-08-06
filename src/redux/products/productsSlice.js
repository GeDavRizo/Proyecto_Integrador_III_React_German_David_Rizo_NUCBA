/*
  Descripción: Redux slice para manejar el estado de products.
  Funciones:
    - selectProducts
    - selectVisibleCount
  Requiere:
    - Módulos locales del proyecto
    - Redux Toolkit
*/

import { createSlice } from "@reduxjs/toolkit";
import { products as initialProducts } from "../../data";
import { INITIAL_LIMIT } from "../../utils/constants";

const initialState = {
  items: initialProducts,
  visibleCount: INITIAL_LIMIT,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setVisibleCount: (state, action) => {
      state.visibleCount = action.payload;
    },
  },
});

export const { setVisibleCount } = productsSlice.actions;
export const selectProducts = (state) => state.products.items;
export const selectVisibleCount = (state) => state.products.visibleCount;
export default productsSlice.reducer;
