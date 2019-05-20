
import { filterConstant} from '../constants/filter.constant';

const initialFilter = "SHOW_ALL";

export default function filter(state = initialFilter, action) {
 
    switch(action.type) {
        case filterConstant.FILTER_PRODUCT:
            return action.filter;
        default: 
            return state;
    }
}