import {PartConstant,PartCreateConstant,PartDeleteConstant,PartSingleConstant,PartUpdateConstant} from '../constants/part.constant';

export function partRequest(productId) {
    return {
        type: PartConstant.PART_REQUEST,
        productId: productId,
    }
}
export function partSuccess(payload) {
    return {
        type: PartConstant.PART_SUCCESS,
        payload: payload,
    }
}
export function partError(error) {
    return {
        type: PartConstant.PART_ERROR,
        error: error,
    }
}
export function partCreateRequest(body) {
    return {
        type: PartCreateConstant.PART_CREATE_REQUEST,
        body: body,
    }
}
export function partCreateSuccess(payload) {
    return {
        type: PartCreateConstant.PART_CREATE_SUCCESS,
        payload: payload,
    }
}
export function partCreateError(error) {
    return {
        type: PartCreateConstant.PART_CREATE_ERROR,
    }
}
export function partSingleRequest(partId) {
    return {
        type: PartSingleConstant.PART_SINGLE_REQUEST,
        partId: partId
    }
} 
export function partSingleSuccess(payload) {
    return {
        type: PartSingleConstant.PART_SINGLE_SUCCESS,
        payload: payload,
    }
}
export function partSingleError(error) {
    return {
        type: PartSingleConstant.PART_SINGLE_ERROR,
        error: error,
    }
}
export function partUpdateRequest(partId) {
    return {
        type: PartUpdateConstant.PART_UPDATE_REQUEST,
        partId: partId
    }
}
export function partUpdateSuccess(payload) {
    return {
        type: PartUpdateConstant.PART_UPDATE_SUCCESS,
        payload: payload,
    }
}
export function partUpdateError(error) {
    return {
        type: PartUpdateConstant.PART_UPDATE_ERROR,
        error: error,
    }
}

export function partDeleteRequest(partId) {
    return {
        type: PartDeleteConstant.PART_DELETE_REQUEST,
        partId: partId,
    }
}

export function partDeleteSuccess(payload) {
    return {
        type: PartDeleteConstant.PART_DELETE_SUCCESS,
        payload: payload,
    }
}
export function partDeleteError(error) {
    return {
        type: PartDeleteConstant.PART_DELETE_ERROR,
        error: error,
    }
}