import * as types from "../constants/type.user";
import { userService } from "../services/user.service";

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

export function register(user) {
  return dispatch => {
    dispatch(userRegistrationRequested());

    return userService.register(user)
      .then((message) => {
        dispatch(userRegistrationSuccess(message));
      })
      .catch((errors) => {
        dispatch(userRegistrationFailure(errors));
      });
  }
}
