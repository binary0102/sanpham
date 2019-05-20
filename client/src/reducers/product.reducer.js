import {ProductConstants} from '../constants/product.constant'
const initialState = {
  
    isFetching: false,
    payload: {
    description: {
        heading:"",
        materialCare:[],
        secondary:[],
        sizeFit: [],
    },
    product: {
        images:[],
        salePrice: 0,
        retailPrice: 0,
    },
   }
}
export default function product(state= initialState,action) {
    switch (action.type) {
        case ProductConstants.PRODUCT_REQUEST:
            return {
                productId: action.productId,
                isFetching: true,
                payload: {
                    description:{
                        heading:"",
                        materialCare:[],
                        secondary:[],
                        sizeFit: [],
                    }, 
                    product: {
                        images:[],
                        salePrice:  0,
                        retailPrice: 0,
                    },
                   }
            }
        case ProductConstants.PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                payload: action.payload,
            }
        case ProductConstants.PRODUCT_FAILD: {
            return {
                error: action.error,
            }
        }
        default:
            return state;
    }
}