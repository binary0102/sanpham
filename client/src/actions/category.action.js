import { categoryConstants,categoryConstant } from '../constants/category.constant';

export const categoryActions = {
    request,
    susscess,
    failure
}
function request(id, params) {
    return {
        type: categoryConstants.CATEGORY_REQUEST,
        categoryId: id,
        params: params,
    }
}
function susscess(data) {
    return {
        type: categoryConstants.CATEGORY_SUCCESS,
        payload: data, 
    }
}
function failure(error) {
    return {
        type: categoryConstants.CATEGORY_FAILURE,
        error: error,
    }
}
export function requestCategory(categoryName) {
    return {
        type : categoryConstant.CATEGORY_FETCH_REQUEST,
        categoryName: categoryName,
    }
}
export function successCategory(payload) {
    return {
        type: categoryConstant.CATEGORYF_FETCH_SUCCESS,
        payload: payload,
    }
}
export function failureCategory(error) {
    return {
        type: categoryConstant.CATEGORY_FETCH_REQUEST,
        error: error,
    }
}