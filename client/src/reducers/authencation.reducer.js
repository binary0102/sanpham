
import {userAuthConstant} from '../constants/user.constant'
export default function authenReducer(state = {isFetching: false ,isLoggedIn:false, user: {
    cart:[]
}}, action) {

    switch (action.type) {
        case userAuthConstant.AUTH_REQUEST:
            return {
                isFetching: true,
                isLoggedIn: false,
                user: {
                    cart:[]
                }
            }
        case userAuthConstant.AUTH_SUCCESS: 
            return {
                isFetching: false,
                isLoggedIn: true,
                ...action.payload,
            }
         case "CART_SUCCESS": {
            console.log(state.user.cart);
            console.log(action.payload.cart)
            let cartNode = state.user.cart.find(cart => {
              return  cart._id === action.payload.cart._id
            })
            if (!cartNode) {
                state.user.cart.push(action.payload.cart)
            }
            return {    
                ...state
            }
        }
        case userAuthConstant.AUTH_ERROR: 
            return {
                error: action.error,
            }
       
        default:
            return state;
    }
}
