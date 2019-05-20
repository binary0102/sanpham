import {CartConstant} from '../constants/cart.constant';

export function cartReducer(state= {isFetching: false},action) {
  
    switch (action.type) {
        case CartConstant.CART_REQUEST: 
            return {
                isFetching: true,
                productId: action.productId,
                quanlity: action.quanlity,
            }
        case CartConstant.CART_SUCCESS: {
            return {
                isFetching: false,
                payload: action.payload,

            }
        }
        case CartConstant.CART_ERROR: {
            return {
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}