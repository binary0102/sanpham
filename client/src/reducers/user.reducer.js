import { userConstants } from '../constants/user.constant'

export default function authentication(state = {}, action) {
    switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
          loggingIn: true,
          user: action.user,
          router: action.router,
        };
      case userConstants.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case userConstants.LOGIN_FAILURE:
        return {};
      case userConstants.LOGOUT:
        return {};
      default:
        return state
    }
  };