import { configureStore } from "@reduxjs/toolkit";
import postListReducer from "../redux/reducers/getPostList";
import authReducer from "../redux/reducers/authSlice";
import modalReducer from "../redux/reducers/openModalSlice"

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    auth: authReducer,
    showModal: modalReducer
  },
});

export default store;
