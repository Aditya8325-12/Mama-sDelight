import LoadingSlice from "./LoadingReducer";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    Loading: LoadingSlice,
  },
});
// const rootReducer = combineReducers({
//   LoadingReducer,
// });

export default store;
