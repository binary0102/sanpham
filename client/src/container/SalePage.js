import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { categoryActions } from '../actions/category.action';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function SalePage(props) {
    const { action } = props; 
    console.log(props);
    function test() {
        action.request("5cad4cfbb60a1224d754e851,5cad4d922797d325dce211e9");
    }
    
 
    return(
        <div> 
          
            <button onClick={test} >A aa</button>
            { props.category.isFetching  && console.log("Loading ... ")}
            { !props.category.isFetching && props.category.payload.product.length !== 0 && <Redirect to={{pathname: '/category', state: {
                product: props.category.payload.product,
                category: props.category.payload.category,
                
            }}} />}
        </div>

        
       //<SaleShow />
    );
   
}
function mapStateToProps(state) {
   // console.log(state);
    return {
        category : state.categoryReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(categoryActions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SalePage));