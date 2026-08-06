/*
  Descripción: Redux slice para manejar el estado de cart.
  Funciones:
    - selectCartHidden
    - selectCartItems
    - selectCartShippingCost
    - selectCartSubtotal
    - selectCartTotal
    - selectCartCount
  Requiere:
    - Redux Toolkit
*/

import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  calculateShippingCost,
  removeItemFromCart,
  resetShippingCost,
} from "./cart-utils";

const SHIPPING_COST_PER_PRODUCT = 0.2;

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const newCartItems = addItemToCart(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
    removeFromCart: (state, action) => {
      const newCartItems = removeItemFromCart(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    toggleHiddenCart: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { addToCart, clearCart, removeFromCart, toggleHiddenCart } =
  cartSlice.actions;

export const selectCartHidden = (state) => state.cart.hidden;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartShippingCost = (state) =>
  calculateShippingCost(state.cart.cartItems, SHIPPING_COST_PER_PRODUCT);
export const selectCartSubtotal = (state) =>
  state.cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
export const selectCartTotal = (state) =>
  selectCartSubtotal(state) + selectCartShippingCost(state);
export const selectCartCount = (state) =>
  state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);

export default cartSlice.reducer;
