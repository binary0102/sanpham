import { connect } from 'react-redux';
import ShoppingCart from '../component/ShoppingCart';
const mapStateToProps = (state) =>{ 
    return {
        payload: state.authenReducer,
    }
}
const maptDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,maptDispatchToProps)(ShoppingCart);