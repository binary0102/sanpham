import React from 'react';
import { connect } from 'react-redux';
import {request} from '../actions/product.action';
import ShoppingCart from '../component/Product';
import { bindActionCreators } from 'redux';
import {cartRequest} from '../actions/cart.action';
const mapStateToProps = (state) => {
    
    return {
        isFetching: state.productReducer.isFetching,
        payload: state.productReducer.payload
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        request: bindActionCreators(request,dispatch),
        cartRequest: bindActionCreators(cartRequest, dispatch),
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);