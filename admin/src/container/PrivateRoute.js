
import { connect } from 'react-redux';
import {PrivateRoute} from '../router/account';
import {authRequest} from '../actions/user.action'
import { bindActionCreators } from 'redux';
function mapStateToProps(state) {
   
    return { 
        authentication: state.authencationReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        requestAuth : bindActionCreators(authRequest, dispatch), 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);