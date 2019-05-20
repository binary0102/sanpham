
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loginRequest } from '../actions/user.action'
import Login from '../component/Login';
function handleError(error) {
    switch(error.message) {
        case "PASSWORD_INCORRECT": {
            return {
                message: "Sai mật khẩu "
            }
        }
        case "EMAIL_INCORRECT": {
            return {
                message: "Email không đúng. Vui lòng thử lại"
            }
        }

    }
}
function mapStateToProps(state) {
    
    return {
        alert: handleError(state.alertReducer),  
        authencation: state.authencationReducer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loginRequest: bindActionCreators(loginRequest,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);