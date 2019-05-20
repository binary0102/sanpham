import {UploadConstant} from '../constants/upload.constant';

export function uploadRequest(productId,files) {
    return {
        type: UploadConstant.UPLOAD_REQUEST,
        productId: productId,
        files:files,
    }
}

export function uploadSuccess(payload) {
    return {
        type: UploadConstant.UPLOAD_SUCCESS,
        payload: payload,
    }
}

export function uploadFailure(error) {
    return {
        type: UploadConstant.UPLOAD_FAILURE,
        error: error,
    }
}
