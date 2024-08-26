
import { createSlice } from "@reduxjs/toolkit";

// const initalstate = false;

// const LoadingReducer = (state = initalstate, action) => {
//   if (action.type === "loading") {
//     return (state = action.value);
//   } else {
//     return state;
//   }
// };


const LoadingSlice=createSlice({
  name:"LoadingReducer",
  initialState:false,
  reducers:{
      changeLoadingState(state,action)
      {
          return state=action.payload;
      }
  }
});


export const {changeLoadingState}=LoadingSlice.actions;
export default  LoadingSlice.reducer;
