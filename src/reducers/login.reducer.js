"use strict";

import * as types from "../constants/auth.type";

export default function loginReducer(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token')
        ? true
        : false
}, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.user,
                errors: ''
            })
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errors: action.message
            })
        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errors: action.message
            })
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
              isFetching: true,
              isAuthenticated: false
            })
        default:
            return state;
    }
}
