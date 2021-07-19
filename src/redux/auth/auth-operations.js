import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = userObj => async dispatch => {
  // console.log(userObj)
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', userObj);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    // console.log(error)
    dispatch(registerError(error.masege));
  }
};
