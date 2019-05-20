import React from 'react';

import styled from "styled-components";

import DropDown from './DropDown';
import { filterConstant} from '../constants/filter.constant';
import { connect } from 'react-redux';
import {ListItems} from './ListItems'
const TitleHeader = styled.div`
display: inherit;
    font-size: 18px;
    font-weight: bold;
    text-transform: none;
    line-height: 30px;
    color: #444;
    text-decoration: none;
        margin-top: 0px !important;
`
const Sort = styled.div`
    float: right;
    display: inline-block;
`
const ListGroup = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: inline;
`
const ListGroupItem = styled.li`
    border: 1px solid #e5e5e5;
`

 function ListProduct(props) {
    
    const { product } = props; 
    return (
       
        <div className="col-7 col-lg-9 col-md-9">
            <div> 
                <div className="title-category mb-3">
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                    <TitleHeader>
                        Udumbara
                    </TitleHeader>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Sort >
                            <DropDown  label="Sắp xếp:" selectedOption={{label:"Gợi ý",name:"RECOMMENDED"}}>

                            </DropDown>
                        </Sort>
                    </div>
                    </div>
                </div>
                <div className="product-view">
                    <div className="row">
                      
                        { product.map( product => <ListItems productId={product._id}  key={product._id} product={product} />)}
                       
                    </div>
                </div>
            </div>
        </div>

    )
}



const getProductFilter = (product, filter) => { 
    switch(filter) {
        case filterConstant.SHOW_ALL:{
            return product;
        }
        case filterConstant.PRICE_LOW_TO_HIGHT: {
             product.sort(function(a,b) {return b.salePrice - a.salePrice})
            return product;
        }
        default: 
            return product;
    }
}
function mapStateToProps(state) {
   
   /*   return {
         product : getProductFilter(state.CategoryReducer.payload.reduce((total,category) =>{
            return total.concat(category.product)
         }, []),state.filterReducer),
     }; */
     return { 
         product: getProductFilter(state.categoryReducer.payload.product)
     }

 }

export default connect(mapStateToProps)(ListProduct);