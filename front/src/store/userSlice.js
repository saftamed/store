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
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    reqSuccess: (state) => {
      state.isFetching = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,logout,reqSuccess,setNotification} = userSlice.actions;
export default userSlice.reducer;