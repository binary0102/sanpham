import { put,  takeEvery } from 'redux-saga/effects'
import { cartSuccess, cartError} from '../actions/cart.action';
import {CartConstant } from '../constants/cart.constant'
import {addOrder} from '../helper/saleService'
 function *requestAddCart(action) {
    
    const {response, error} = yield addOrder(action.productId, action.quanlity);
    if (response) {
        yield put(cartSuccess(response));
    }else {
        yield put(cartError(error));
    }
}
export function *watchAddCart() {
    yield takeEvery(CartConstant.CART_REQUEST,requestAddCart);
}