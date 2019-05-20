
import { connect } from 'react-redux';

import {productGetSigle,updateRequest} from '../actions/product.action'
import {uploadRequest} from '../actions/upload.action';
import { bindActionCreators } from 'redux';
import {ProductDetail} from '../component/TestComponent';
import {partRequest} from '../actions/part.action';

function mapStateToProps(state) {
      
        return { 
            data: state.ProductDetailReducer,
         }
   
   
}
function mapDispatchToProps(dispatch) {
    return {
    productGetSigle : bindActionCreators(productGetSigle, dispatch), 
    updateRequest: bindActionCreators(updateRequest, dispatch),
    uploadImage: bindActionCreators(uploadRequest,dispatch),
    partRequest: bindActionCreators(partRequest, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);