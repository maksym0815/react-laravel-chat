import {

  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL
} from "../actions/types";


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  currUser: {},
};

export default function (state = initialState, action) {

  switch (action.type) {

    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currUser: action.payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: localStorage.getItem('token'),
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case AUTH_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }

    default:
        return state;
  }

}