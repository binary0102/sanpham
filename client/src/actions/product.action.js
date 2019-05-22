import {ProductConstants } from '../constants/product.constant';

export function request(id) {
    return {
        type: ProductConstants.PRODUCT_REQUEST,
        productId: id,
    }
}
export function success(data) {
    return {
        type: ProductConstants.PRODUCT_SUCCESS,
        payload: data,
    }
}
export function faild(error) {
    return {
        type: ProductConstants.PRODUCT_FAILD,
        error: error,
    }
}