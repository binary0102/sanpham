import { productPut } from '../constants/product.constant'
import { patchProduct } from '../helper/saleService';
import { put, takeEvery } from 'redux-saga/effects'
import {updateError,updateSuccess} from '../actions/product.action';
function* update(action) {
    const {response, error} = yield patchProduct(action.productId,action.body);
    if (response) {
        yield put(updateSuccess(response));
    }else {
        yield put(updateError(error));
    }
}
export function* watchUpdateProduct() {
    yield takeEvery(productPut.UPDATE_REQUEST, update);
}