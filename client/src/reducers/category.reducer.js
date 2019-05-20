import { categoryConstants,categoryConstant  } from '../constants/category.constant'
const initialState = {
  isFetching: false,
  categoryId: '',
  payload: {
    categories: [],
    product: []
  },
}
export default function category(state = initialState, action) {

    switch (action.type) {
      case categoryConstants.CATEGORY_REQUEST:
        return {
            isFetching: true,
            categoryId: action.category,
            payload: {
              categories: [],
              product: []
            },
        };
      case categoryConstants.CATEGORY_SUCCESS:
  
        return {
          isFetching: false,
          payload: action.payload,
        };
      case categoryConstants.CATEGORY_FAILURE:
        return {};
     
      default:
        return state
    }
  };
export function CategoryReducer(state = {isFetching:false,payload: [{product:[]}]}, action) {
   switch (action.type) {
     case categoryConstant.CATEGORY_FETCH_REQUEST:  
          return {
            isFetching: true,
            payload: [{product:[]}],
            categoryName: action.categoryName,
          }    
     case categoryConstant.CATEGORYF_FETCH_SUCCESS: 
          return {
            isFetching: false,
            payload: action.payload,
          }
     case categoryConstant.CATEGORY_FETCH_FAILURE: 
          return {
            error: action.error,
          }
     default:
       return state;
   }
}