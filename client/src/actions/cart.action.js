import {CartConstant} from '../constants/cart.constant'

export function cartRequest(productId, quanlity) {
    return {
        type: CartConstant.CART_REQUEST,
        productId: productId,
        quanlity: quanlity,
    }
}

export function cartSuccess(payload) {
    return {
        type: CartConstant.CART_SUCCESS,
        payload: payload,
    }
}

export function cartError(error) {
    return {
        type: CartConstant.CART_ERROR,
        error: error,
    }
}
