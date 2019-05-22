import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {authRequest} from '../actions/user.action'
import PageHeader from '../component/PageHeader';
const mapStatetoProps = (state) => {

    return {
        payload: state.authenReducer,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        authRequest: bindActionCreators(authRequest, dispatch)
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(PageHeader)