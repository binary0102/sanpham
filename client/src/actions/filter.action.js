import { filterConstant} from '../constants/filter.constant';

export const filter = (filter) => {
    return {
        type: filterConstant.FILTER_PRODUCT,
        filter: filter
    }
}