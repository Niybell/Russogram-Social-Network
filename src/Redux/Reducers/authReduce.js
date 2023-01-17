import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../Api/api";

const SET_AUTH_DATA = "SET-AUTH-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";
const LOG_OUT = "LOG-OUT";
const INITIAL = "INITIAL";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
  initializedAccount: false
}
const authReduce = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return { ...action.data, isAuth: true, initializedAccount: true }
    }
    case LOG_OUT: {
      return {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        initializedAccount: true
      }
    }
    case INITIAL: {
      return { ...state, initializedAccount: true };
    }
    case SET_CAPTCHA_URL: {
      debugger;
      return { ...state, captchaUrl: action.url }
    }
    default: return state
  }
}

export const setAuthDataActionCreator = (data) => {
  return {
    type: SET_AUTH_DATA,
    data
  }
}
export const logOutActionCreator = () => {
  return {
    type: LOG_OUT
  }
}
export const initialActionCreator = () => {
  return {
    type: INITIAL
  }
}
export const setCaptchaUrlActionCreator = (url) => {
  return {
    type: SET_CAPTCHA_URL,
    url
  }
}
export const getAuthData = () => async (dispatch) => {
  const res = await authAPI.getAuthMe();
  if (res.resultCode === 0) {
    dispatch(setAuthDataActionCreator(res.data));
  }
}
export const logOut = () => async (dispatch) => {
  const res = await authAPI.deleteAuthLogin();
  if (res.resultCode === 0) {
    dispatch(logOutActionCreator());
    dispatch(initial());
  }
}
export const logIn = (email, password, rememberMe, captcha=null) => async (dispatch) => {
  const res = await authAPI.postAuthLogin({ email, password, rememberMe, captcha });
  if (res.resultCode === 0) {
    dispatch(getAuthData());
    dispatch(initial());
  }
  else {
    if (res.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    dispatch(stopSubmit("login", { _error: res.messages[0] }))
  }
}
export const getCaptchaUrl = () => async (dispatch) => {
  dispatch(setCaptchaUrlActionCreator(await securityAPI.getCaptchaURL()));
}
export const initial = () => async (dispatch) => {
  await dispatch(getAuthData());
  dispatch(initialActionCreator());
}
export default authReduce;