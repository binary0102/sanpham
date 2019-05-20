import { put, takeEvery } from 'redux-saga/effects'
import {UploadConstant} from '../constants/upload.constant';
import {uploadSuccess,uploadFailure} from '../actions/upload.action';
import {uploadFileImage} from '../helper/saleService';

function *handleUpload (action) {
    
    const {response, error} = uploadFileImage(action.productId, action.files);
    if (response) {
        yield put(uploadSuccess(response));
    }else {
        yield put(uploadFailure(error));
    }
}
export function *watchUploadFile() {
    yield takeEvery("UPLOAD_REQUEST",handleUpload )
}