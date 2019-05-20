import {put,call, takeEvery} from 'redux-saga/effects';
import {successCategory,failureCategory} from '../actions/category.action';
import {categoryConstant} from '../constants/category.constant';
import {fetchCategory} from '../helper/saleService';
export function *handleGetCategory(action) {

     const {response,error} = yield call(fetchCategory,action.categoryName);
    if(response) {
        yield put(successCategory(response))
    }else {
        yield put(failureCategory(error))
    }
}
export function *watchGetCategory() {
    yield takeEvery("CATEGORY_FETCH_REQUEST", handleGetCategory)
}