import { alertConstants } from '../constants/arlert.constant';


export function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

export function errorAlert(message) {
    return { type: alertConstants.ERROR, message };
}

export function clearAlert() {
    return { type: alertConstants.CLEAR };
}