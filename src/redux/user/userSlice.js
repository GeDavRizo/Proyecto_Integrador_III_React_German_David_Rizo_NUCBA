/*
  Archivo: src/redux/user/userSlice.js
  Descripción: Redux slice de usuario.
*/

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
