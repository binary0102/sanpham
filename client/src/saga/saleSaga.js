import { fork,put, call, takeEvery } from 'redux-saga/effects'
import { categoryConstants } from '../constants/category.constant';
import { getSale } from '../helper/saleService';
export function* fetchData(action) {
    
    try {
        console.log(action);
        const data = yield call(getSale, action.categoryId, action.params);
        localStorage.setItem("test","test");
        yield put({type: categoryConstants.LOGIN_SUCCESS, data})
    } catch (error) {
        yield put({type: categoryConstants.FAILURE, error})
     }
}
function* watchFetchData() {
  
    yield takeEvery('CATEGORY_REQUEST', fetchData);
}

export default function* root() {     
    console.log("aa");               
    yield all([
        afork(watchFetchData),
    ])
}