import { createSlice } from "@reduxjs/toolkit";

const openModalSlice = createSlice({
  name: "modal",
  initialState: {
    value: false,
  },
  reducers: {
    setShowModal: (state) => {
      state.value = true;
    },
    setHideModal: (state) => {
      state.value = false;
    },
  },
});

export const { setHideModal, setShowModal } = openModalSlice.actions;

export default openModalSlice.reducer;
