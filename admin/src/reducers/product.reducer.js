import {ProductConstant,productPut,productCreate,productDelete,UPDATE_PRODUCT} from '../constants/product.constant';
let stateInit = {
    isFetching: false,
    payload: {
        product : [],
    }
}
export default function product(state=stateInit ,action) {
    switch (action.type) {
        case ProductConstant.PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true,
                payload: {
                    product : [],
                }
            }
        case ProductConstant.PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                payload:{ ...action.payload }
            }
        case ProductConstant.PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case UPDATE_PRODUCT: {
            state.payload.product = state.payload.product.map(product => 
                  ( action.product.data._id === product._id ) ? action.product.data : product
            )
            
            return state;

        }
        default:
            return state;
    }
}
export function ProductDetailReducer(state = {isFetching: false,
    payload: {
        product : {},
     }}, action) {
        switch (action.type) {
            case ProductConstant.PRODUCT_SIGLE_REQUEST:
                return {
                  
                    isFetching: true,
                    payload: {
                        product : {},
                    }
                }
            case ProductConstant.PRODUCT_SIGLE_SUCCESS:
                return {
                  
                    isFetching: false,
                    payload:{ ...action.payload }
                }
            case ProductConstant.PRODUCT_SIGLE_FAILURE:
                return {
                  
                    error: action.error
                }
               
            default:
                return state;
        }
}
export function updateProduct(state = stateInit, action) {
    switch (action.type) {
        case productPut.UPDATE_REQUEST:
            return {
                ...state,
                isFetching: true,
                productId : action.productId,
            }
        case productPut.UPDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                payload:{ ...action.payload }
            }
        case productPut.UPDATE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}
export function createProduct(state = stateInit, action) {
    switch (action.type) {
        case productCreate.CREATE_REQUEST:
            return {
                ...state,
                isFetching: true,
                productId : action.productId,
            }
        case productCreate.CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                payload:{ ...action.payload }
            }
        case productCreate.CREATE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}
export function deleteProduct(state = stateInit, action) {
    switch (action.type) {
        case productDelete.UPDATE_REQUEST:
            return {
                ...state,
                isFetching: true,
                productId : action.productId,
            }
        case productDelete.UPDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                payload:{ ...action.payload }
            }
        case productDelete.UPDATE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}