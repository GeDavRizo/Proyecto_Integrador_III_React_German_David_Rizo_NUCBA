/*
  Archivo: src/redux/orders/ordersSlice.js
  Descripción: Módulo Redux para manejar estado.
*/

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: INITIAL_STATE,
  reducers: {
    createOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.orders = state.orders
        ? [...state.orders, action.payload]
        : [action.payload];
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Error inesperado";
    },
    fetchOrdersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.orders = [...action.payload];
    },
    fetchOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  createOrderStart,
  createOrderSuccess,
  createOrderFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFail,
  clearError,
} = ordersSlice.actions;

export const selectOrders = (state) => state.orders.orders;
export const selectOrdersLoading = (state) => state.orders.loading;
export const selectOrdersError = (state) => state.orders.error;

export default ordersSlice.reducer;
