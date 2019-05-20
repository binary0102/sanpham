import {UploadConstant} from '../constants/upload.constant';
const initState = {
    isFetching: false,
    files: [],
    productId: "",
}
export function uploadReducer(state = initState, action) {

    switch (action.type) {
        case UploadConstant.UPLOAD_REQUEST:
            return {
                isFetching: true,
                productId: action.productId,
                files: action.files,
            }
        case UploadConstant.UPLOAD_SUCCESS:
            return {
                isFetching: false,
                payload: action.payload
            }
        case UploadConstant.UPLOAD_FAILURE:
            return {
                error: action.error,
            }
        default:
            return state;
            
    }
}