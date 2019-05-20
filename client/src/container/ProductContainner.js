import { connect } from 'react-redux';
import {ListItems} from '../component/ListItems'
import {request } from '../actions/product.action'
const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        request : () => dispatch(request(ownProps.productId)) 
    }
}
export default connect(null, mapDispatchToProps)(ListItems);

