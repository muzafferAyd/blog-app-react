import { configureStore } from "@reduxjs/toolkit";
import postListReducer from "../redux/reducers/getPostList";
import authReducer from "../redux/reducers/authSlice";
import modalReducer from "../redux/reducers/openModalSlice";
import addNewPostReducer from "../redux/reducers/createNewPost";

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    auth: authReducer,
    showModal: modalReducer,
    addNewPost: addNewPostReducer,
  },
});

export default store;
