import { put,  takeEvery } from 'redux-saga/effects'
import {authSuccess,authError} from '../actions/user.action';
import {userAuthConstant} from '../constants/user.constant'
import {handleAuth} from '../helper/saleService'
function *handleRequestAuth(action) {
  
    const {response, error} = yield handleAuth();
    if (response) {
        yield put(authSuccess(response));
    }else {
        yield put(authError(error));
    }
}

export function *watchRequestAuth() {
   yield takeEvery(userAuthConstant.AUTH_REQUEST, handleRequestAuth);
}