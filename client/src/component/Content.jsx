import React, { useEffect } from 'react';
import ListProduct from './ListProduct';
import Asider from './Asider';
import Section from './Section';
import { requestCategory } from '../actions/category.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function  Content({requestCategory,categories,...props}) {

    
    /*const categories = props.location.state.product.map(doc => doc.category).filter(( element, index, array) => ( array.indexOf(element) === index
    ));*/

    const { categorySlug } = props.match.params;
  
    useEffect(() => {
       
         requestCategory(categorySlug)
       
    },[categorySlug]);
   
    return (
        <div>
        <Section />
        <div className="container">
            <div className="row">  
              
                <Asider categories={categories}  />
              
                <ListProduct />
            </div>
          
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    
    return {
        categories: state.CategoryReducer.payload
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestCategory: bindActionCreators(requestCategory, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);