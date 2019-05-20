
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {authRequest} from '../actions/user.action';

import DashBroad from '../component/DashBroad';
import { productRequest } from '../actions/product.action';

function mapStateToProps(state) {
    const {payload, isFetching} = state.productReducer;
    console.log(state.productReducer)
    return { 
        product: {payload, isFetching},
    }
}
function mapDispatchToProps(dispatch) {
    return {
        authRequest: bindActionCreators(authRequest, dispatch),
        productRequest: bindActionCreators(productRequest, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBroad);