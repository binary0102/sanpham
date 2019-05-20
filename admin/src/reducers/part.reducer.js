import {PartConstant,PartCreateConstant,PartDeleteConstant,PartSingleConstant,PartUpdateConstant} from '../constants/part.constant';

export function partReducer(state= {isFeching: false},action) {
    switch (action.type) {
        case PartConstant.PART_REQUEST: 
            return {
                isFeching: true,
                productId: action.productId,
            }
        case PartConstant.PART_SUCCESS: {
            return {
                isFeching: false,
                payload: action.payload
            }
        }
        case PartConstant.PART_ERROR: {
            return {
                error: action.error,
            }
        }
    
    
        default:
            return state;
    }
}