import {ProductConstant,productPut,productCreate,productDelete,UPDATE_PRODUCT } from '../constants/product.constant';

export const productRequest = () => {
    return {
        type: ProductConstant.PRODUCT_REQUEST,
    }
}
export const productGetSigle = (productId) => {
    return {
        type: ProductConstant.PRODUCT_SIGLE_REQUEST,
        productId: productId,
    }
}
export const productGetSigleSuccess = (payload) => {
    return {
        type: ProductConstant.PRODUCT_SIGLE_SUCCESS,
        payload: payload,
    }
}
export const productGetSigleError = (error) => {
    return {
        type: ProductConstant.PRODUCT_SIGLE_FAILURE,
        error: error,
    }
}
export const productSuccess = (payload) => {
    return {
        type: ProductConstant.PRODUCT_SUCCESS,
        payload: payload,
    }
}

export const productError = (error) => {
    return {
        type: ProductConstant.PRODUCT_FAILURE,
        error: error,
    }
}

export const updateRequest  = (id,body) => {
    return {
        type: productPut.UPDATE_REQUEST,
        productId: id,
        body: body,
    }
}

export const updateSuccess = payload => {
    return {
        type: productPut.UPDATE_SUCCESS,
        payload: payload,
    }
}
export const updateError  = error => {
    return {
        type: productPut.UPDATE_FAILURE,
        error: error,
    }
}
export const createRequest  = (id) => {
    return {
        type: productCreate.CREATE_REQUEST,
        productId: id,
    }
}

export const createSuccess = payload => {
    return {
        type: productCreate.CREATE_SUCCESS,
        payload: payload,
    }
}
export const createError  = error => {
    return {
        type: productCreate.CREATE_FAILURE,
        error: error,
    }
}
export const deleteRequest  = (id) => {
    return {
        type: productDelete.DELETE_REQUEST,
        productId: id,
    }
}

export const deleteSuccess = payload => {
    return {
        type: productDelete.DELETE_SUCCESS,
        payload: payload,
    }
}
export const deleteError  = error => {
    return {
        type: productDelete.DELETE_FAILURE,
        error: error,
    }
}