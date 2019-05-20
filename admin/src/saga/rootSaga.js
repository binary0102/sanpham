    import { all,fork,put, call, takeEvery } from 'redux-saga/effects'
import {userConstants} from '../constants/user.constant';
import {errorAlert,clearAlert} from '../actions/alert.action';
import {loginSuccess,loginFailure,authSuccess} from '../actions/user.action';
import {  loginUser,handleAuth,getAllProduct,getSigleProduct} from '../helper/saleService';
import { productSuccess,productError ,productGetSigleSuccess,productGetSigleError} from '../actions/product.action';
import { ProductConstant} from  '../constants/product.constant';
import {watchUpdateProduct} from './productSaga'
import {watchUploadFile} from './uploadSaga';
import {watchPartRequest} from './partSaga'
function *fetchLogin(action) {
    yield put(clearAlert())
    const {response, error} = yield call(loginUser, action.user.email, action.user.password);
  
    if(response) {
        yield put(loginSuccess(response));  
    }       
    else {
        yield put(errorAlert(error));
        yield put(loginFailure(error));
    }
       

}
function* requestLogin(action) {
    const {response, error} = yield handleAuth();
    if (response) {
        yield put(loginSuccess(response));  
    }else {
        
    }
}
function* watchAuth() {
   yield takeEvery(userConstants.AUTH_REQUEST, requestLogin)
}
function* watchLogin() {
yield takeEvery(userConstants.LOGIN_REQUEST, fetchLogin)
}
function* fetchProduct() {
    const {response, error} = yield getAllProduct();
    if (response) {
        yield put(productSuccess(response));
    }else {
        yield put(productError(error));
    }
}
function* watchProduct() {
    yield takeEvery(ProductConstant.PRODUCT_REQUEST, fetchProduct);
}
function *GetSigleProduct(action) {

    const {response, error} = yield getSigleProduct(action.productId);
    if (response) {
        yield put(productGetSigleSuccess(response));
    }else {
        yield put(productGetSigleError(error));
    }
}
function* watchGetSigleProduct() {
    yield takeEvery(ProductConstant.PRODUCT_SIGLE_REQUEST,GetSigleProduct )
}

export default function* root() {  

    yield all([
        fork(watchGetSigleProduct),
        fork(watchLogin),
        fork(watchAuth),
        fork(watchProduct),
        fork(watchUpdateProduct),
        fork(watchUploadFile),
        fork(watchPartRequest),
    ])
}