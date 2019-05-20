import { all,fork,put, call, takeEvery } from 'redux-saga/effects'
import { categoryConstants } from '../constants/category.constant';
import { categoryActions} from '../actions/category.action'
import {ProductConstants } from '../constants/product.constant';
import * as ProductActions from '../actions/product.action';
import { getSale, getProduct , loginUser} from '../helper/saleService';
import {loginSuccess,loginFailure} from '../actions/user.action';
import {userConstants} from '../constants/user.constant';
import {errorAlert,clearAlert} from '../actions/alert.action';
import {watchAddCart} from './cartSage';
import {watchRequestAuth} from './userSaga'
import {watchGetCategory} from './categorySaga'

export function* fetchData(action) {
    
    try {
        const data = yield call(getSale, action.categoryId, action.params);
       
  
        if (localStorage.getItem("categories") === null) {
            localStorage.setItem("categories",JSON.stringify(data.categories));
        }
        yield put(categoryActions.susscess(data));
    } catch (error) {
        yield put({type: categoryConstants.FAILURE, error})
     }
}
function* watchFetchData() {
  
    yield takeEvery('CATEGORY_REQUEST', fetchData);
}
function *fetchProduct(action) {
    try {
        const data = yield call(getProduct, action.productId);
        yield put(ProductActions.success(data));
    }catch(error) {
        yield put(ProductActions.faild(error));
    }
}
function* watchFetchProduct() {
    yield takeEvery(ProductConstants.PRODUCT_REQUEST, fetchProduct)
}
function *fetchLogin(action) {
            yield put(clearAlert())
            const {response, error} = yield call(loginUser, action.user.email, action.user.password,action.router );
            if(response) {
                yield put(loginSuccess(response));  
        
            }       
            else {
                yield put(errorAlert(error));
                yield put(loginFailure(error));
            }
               
       
}
function* watchLogin() {
    yield takeEvery(userConstants.LOGIN_REQUEST, fetchLogin)
}

export default function* root() {  

    yield all([
        fork(watchFetchData),
        fork(watchFetchProduct),
        fork(watchLogin),
        fork(watchAddCart),
        fork(watchRequestAuth),
        fork(watchGetCategory),
    ])
}