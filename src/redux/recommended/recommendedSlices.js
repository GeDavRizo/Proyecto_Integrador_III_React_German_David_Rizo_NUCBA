/*
  Descripción: Archivo fuente del proyecto recommendedSlices.
  Funciones:
    - selectRecommended
  Requiere:
    - Módulos locales del proyecto
    - Redux Toolkit
*/

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";
import { pickRandomProducts } from "../../utils/pickRandomProducts";

const initialState = {
  items: pickRandomProducts(products, 6),
};

const recommendedSlice = createSlice({
  name: "recommended",
  initialState,
  reducers: {
    randomRecommended: (state) => {
      state.items = pickRandomProducts(products, 6);
    },
  },
});

export const { randomRecommended } = recommendedSlice.actions;
export const selectRecommended = (state) => state.recommended.items;
export default recommendedSlice.reducer;
