import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import todoReducer from "../features/todo/todoSlice";
import fetchReducer from "../features/apis/fetchPosts";

export default configureStore({
  reducer: {
    counter: countReducer,
    auth: authReducer,
    todo: todoReducer,
    posts: fetchReducer,
  },
});
