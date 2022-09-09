import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth-slice";
import reducer from "./reducer";

const store = configureStore({
  reducer: {
    // token: localStorage.getItem("token").reducer,
    auth: reducer.reducer,
  }
})

export default store;