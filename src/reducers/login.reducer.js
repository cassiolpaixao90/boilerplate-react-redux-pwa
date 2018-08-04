"use strict";

import * as types            from "../constants/type.user";
import {loginState}          from "../constants/initialState";
export default function loginReducer(state = loginState, action) {
  switch (action.type) {
        case types.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isRequested: true,
                isAuthenticated: false,
            });
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isRequested: false,
                isAuthenticated: true,
            });
        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isRequested: false,
                isAuthenticated: false,
                error: action.error
            });
        default:
            return state;
    }
}
