import {connect} from 'react-redux';
import {updateRequest} from '../actions/product.action'
import {ModalFooterProduct} from '../component/Modal/FooterModal';
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => {
    return {
        updateRequest: bindActionCreators(updateRequest,dispatch)
    };
} 

export default connect(null,mapDispatchToProps)(ModalFooterProduct);