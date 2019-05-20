import { userConstants } from '../constants/user.constant'
let stateInit = {
  isLoggedIn: false,
  user: {},
  isAuthencation: false,
}
export default function authentication(state = stateInit, action) {
  
    switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
          isLoggedIn: false,
          user: action.user,
     
        };
      case userConstants.LOGIN_SUCCESS:
        return {
          isLoggedIn: true,
          user: action.user
        };
      case userConstants.LOGIN_FAILURE:
        return {};
      case userConstants.AUTH_REQUEST: {
        return {
          isAuthencation: true,
          isLoggedIn: false,
          user: {},
        }
      }
  
      case userConstants.LOGOUT:
        return {};
      default:
        return state
    }
  };