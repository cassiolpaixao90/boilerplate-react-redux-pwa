"use strict";

import * as types from "../constants/auth.type";
import {userService} from '../services/user.service'

/**
 * @param {*} creds
 * @description
 */
function requestLogin(user) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    user
  }
}

/**
 * @param {*} user
 */
function receiveLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: user.token,
    message: user.message
  }
}

/**
 * @param {*} message
 */
function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message
  }
}

/**
 * @param {*} user
 */
export function login(user) {
  return dispatch => {
    dispatch(requestLogin(user))
    return userService.login(user)
      .then(user => {
        dispatch(receiveLogin(user))
      })
      .catch(error => {
        dispatch(loginError(error))
      });
  }
}

/**
 * @method requestLogout
 */
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}
/**
 * @method receiveLogout
 */
function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

/**
 * @method logoutUser
 */
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token')
    dispatch(receiveLogout())
  }
}
