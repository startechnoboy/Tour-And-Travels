import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogedin: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        state.isLogedin = true;
      } else {
        state.isLogedin = false;
      }
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLogedin = false;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, register } = AuthSlice.actions;

export default AuthSlice.reducer;
