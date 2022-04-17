import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
    console.log(user);
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:4000/api/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
    console.log(user);
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:4000/api/v1/auth/register", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const updateUser = async (dispatch, info) => {
  dispatch(loginStart());
  axios.defaults.headers.common['token'] = `Bearer ${info.theuser.accessToken }`;

  try {
    const res = await axios.put(`http://localhost:4000/api/v1/user/${info.theuser._id}`, info.user);
    dispatch(loginSuccess({...res.data, accessToken: info.theuser.accessToken}));
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const addAddress = async (dispatch, info) => {
  dispatch(loginStart());
  axios.defaults.headers.common['token'] = `Bearer ${info.theuser.accessToken }`;

  try {
    const res = await axios.put(`http://localhost:4000/api/v1/user/address/${info.theuser._id}`, {adr:info.adr});
    dispatch(loginSuccess({...res.data, accessToken: info.theuser.accessToken}));
  } catch (err) {
    dispatch(loginFailure());
  }
};