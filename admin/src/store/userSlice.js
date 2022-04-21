import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    notification:{
      message: null,
      show: false,
      type: null
    },
    products: [],
    error: false,
  },
  reducers: {
    startReq: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.notification = {
        message: action.payload.msg,
        show: true,
        type: "success",
      };
    },
    reqSuccess: (state,action) => {
      state.isFetching = false;
      state.notification = {
        message: action.payload?action.payload :"Subscribed Successfully",
        show: true,
        type: "success",
      };
    },
    reqProSuccess: (state,action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    reqFailure: (state,action) => {
      state.isFetching = false;
      state.error = true;
      state.notification = {
        message: action.payload?action.payload :"Login failed",
        show: true,
        type: "error",
      };
    },
    logout: (state) => {
      state.currentUser = null;
      state.notification = {
        message: "Logged out",
        show: true,
        type: "success",
      };
    },setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { startReq, loginSuccess, reqSuccess,logout,reqProSuccess,setNotification,reqFailure} = userSlice.actions;
export default userSlice.reducer;