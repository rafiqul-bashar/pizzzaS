import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.info = action.payload;
    },
    logOutUser: (state) => {
      state.info = initialState.info;
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;

export const selectUser = (state) => state.user.info;
export default userSlice.reducer;
