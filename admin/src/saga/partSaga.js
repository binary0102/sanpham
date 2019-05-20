import { put, takeEvery } from 'redux-saga/effects'
import {PartConstant} from '../constants/part.constant';
import {partSuccess,partError} from '../actions/part.action';
import {patchProduct} from '../helper/saleService';

function *handlePartRequest (action) {
    
    const {response, error} = patchProduct(action.productId);
    if (response) {
        yield put(partSuccess(response));
    }else {
        yield put(partError(error));
    }
}
export function *watchPartRequest() {
    yield takeEvery("CART_REQUEST",handlePartRequest)
}