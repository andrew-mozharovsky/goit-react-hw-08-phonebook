import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
import { register } from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registerError]: (_, payload) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
