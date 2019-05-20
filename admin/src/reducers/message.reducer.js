import {MessageConstant} from  '../constants/message.constant';

export default function message(state = {}, action) {
    switch (action.type) {
        case MessageConstant.SEND_MESSAGE:
            return {
                payload: action.payload
            }
        case MessageConstant.MESSAGE_RECEIVED:
            return {
                payload: action.payload
            }
        default:
            return state;
    }
}