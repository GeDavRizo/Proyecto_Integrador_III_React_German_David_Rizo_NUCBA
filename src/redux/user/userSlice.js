/*
  Descripción: Redux slice para manejar el estado de user.
  Requiere:
    - Redux Toolkit
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
