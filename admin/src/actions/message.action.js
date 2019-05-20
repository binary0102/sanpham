import {MessageConstant} from '../constants/message.constant'
export const sendMessage = (payload) => {
    return {
        type : MessageConstant.SEND_MESSAGE,
        payload: payload,
    }
}
export const MessageReceive = (payload) => {
    return {
        type : MessageConstant.MESSAGE_RECEIVED,
        payload: payload,
    }
}