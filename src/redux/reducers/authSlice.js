import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "1",
  },
  reducers: {
    setUser: (state) => {
      state.user = state;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
