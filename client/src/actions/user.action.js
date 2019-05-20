import {userConstants,userAuthConstant} from '../constants/user.constant';

export function loginRequest(user, router) {
     return { 
         type: userConstants.LOGIN_REQUEST, user, router
     }
}
export function loginSuccess(user) {
    return {
        type: userConstants.LOGIN_SUCCESS, user,
    }
}
export function loginFailure(error) {
    return {
        type: userConstants.LOGIN_FAILURE, error,
    }
}
export function authRequest() {
    return {
        type:  userAuthConstant.AUTH_REQUEST,
    }
}
export function authSuccess(payload) {
    return {
        type: userAuthConstant.AUTH_SUCCESS,
        payload: payload,
    }
}
export function authError(error) {
    return {
        type: userAuthConstant.AUTH_ERROR,
        error: error,
    }
}