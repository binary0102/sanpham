import {connect} from 'react-redux';
import Header from '../component/Header';
function mapStateToProps(state) {
  
    return {payload : state.authencationReducer.user};
   
}
export default connect(mapStateToProps)(Header);