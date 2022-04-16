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