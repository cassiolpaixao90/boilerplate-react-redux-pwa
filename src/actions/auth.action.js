"use strict";

import * as types from "../constants/type.user";
import {userService} from '../services/user.service'


function userDataUpdate(user) {
  return {
    type: types.USERDATA_UPDATED,
    user
  }
}

function userAuthenticationRequested() {
  return {
    type: types.LOGIN_REQUEST,
    isAuthenticated: false,
    isRequested: true,
  }
}

function userAuthenticationSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isRequested: false,
    isAuthenticated: true,
    user
  }
}

function userAuthenticationFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    isAuthenticated: false,
    isRequested: false,
    error
  }
}


function userLogoutRequested() {
  return {
    type: types.LOGOUT_REQUEST,
    isRequested: true,
  }
}

function userLogoutSuccessful() {
  return {
    type: types.LOGOUT_SUCCESS,
    isRequested: false,
  }
}

function userLogoutFailure(errorMessage) {
  return {
    type: types.LOGOUT_FAILURE,
    isRequested: true,
    errorMessage
  }
}


function userRegistrationRequested() {
  return {
    type: types.REGISTRATION_REQUEST,
    isRequested: true,
    isRegistered: false
  }
}

function userRegistrationSuccess(message) {
  return {
    type: types.REGISTRATION_SUCCESS,
    isRequested: false,
    isRegistered: true,
    message
  }
}

function userRegistrationFailure(errors) {
  return {
    type: types.REGISTRATION_FAILURE,
    isRequested: false,
    isRegistered: false,
    errors
  }
}

function userProfileUpdateRequested() {
  return {
    type: types.USER_PROFILE_UPDATE_REQUESTED,
    isRequested: true
  }
}

function userProfileUpdateSuccessful() {
  return {
    type: types.USER_PROFILE_UPDATE_SUCCESSFUL,
    isRequested: false
  }
}

function userProfileUpdateFailure(errorMessage) {
  return {
    type: types.USER_PROFILE_UPDATE_FAILURE,
    errorMessage
  }
}

export function login(user) {
  return dispatch => {
    dispatch(userAuthenticationRequested());
    return userService.login(user)
      .then(user => {
        dispatch(userAuthenticationSuccess(user));
        dispatch(userDataUpdate(user));
      })
      .catch(error => {
        dispatch(userAuthenticationFailure(error.data));
      });
  }
}

export function logout() {
  return dispatch => {
    dispatch(userLogoutRequested());

    authenticationApi.logout()
      .then(() => {
        dispatch(userLogoutSuccessful());
        dispatch(userDataUpdate({}));
        // dispatch(routerActions.push("/"));
      })
      .catch(err => {
        dispatch(userLogoutFailure(err))
      });
  }
}


export function register(user) {
  return dispatch => {
    dispatch(userRegistrationRequested());

    return authenticationApi.register(user)
      .then((message) => {
        dispatch(userRegistrationSuccess(message));
        // dispatch(routerActions.push("/login"));
      })
      .catch((errors) => {
        dispatch(userRegistrationFailure(errors));
      });
  }
}


export function updateUserProfile(user) {
  return dispatch => {
    dispatch(userProfileUpdateRequested());

    return authenticationApi.updateUser(user)
      .then((user) => {
        dispatch(userProfileUpdateSuccessful());
        dispatch(userDataUpdate(user));
      })
      .catch((error) => dispatch(userProfileUpdateFailure(error)));
  }
}

export function editUserProfile(edit) {
  return dispatch => {
    dispatch({
      type: types.EDIT_USER_PROFILE,
      editProfile: edit
    });
  }
}
