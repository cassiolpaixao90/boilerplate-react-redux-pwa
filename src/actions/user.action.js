import * as types from "../constants/type.user";

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        userService
            .login(username, password)
            .then(user => {
                dispatch(success(user));
                // history.push('/');
            }, error => {
                dispatch(failure(error));
                // dispatch(alertActions.error(error));
            });
    };

    function request(user) {
        return {type: types.LOGIN_REQUEST, user}
    }
    function success(user) {
        return {type: types.LOGIN_SUCCESS, user}
    }
    function failure(error) {
        return {type: types.LOGIN_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    return {type: types.LOGOUT};
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService
            .getAll()
            .then(users => dispatch(success(users)), error => dispatch(failure(error)));
    };

    function request() {
        return {type: types.GETALL_REQUEST}
    }
    function success(users) {
        return {type: types.GETALL_SUCCESS, users}
    }
    function failure(error) {
        return {type: types.GETALL_FAILURE, error}
    }
}
