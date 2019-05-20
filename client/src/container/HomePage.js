
import Home from '../component/Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {requestCategory} from '../actions/category.action'

const mapStatetoProps = (state) => {
    
    return {
      payload: state.CategoryReducer,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        requestCategory: bindActionCreators(requestCategory, dispatch),
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Home)