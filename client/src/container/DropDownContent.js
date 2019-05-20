import { connect } from 'react-redux';
import {categoryActions  } from '../actions/category.action'
import { bindActionCreators } from 'redux';
import DropDownItem from '../component/DropDownItem';
import React from 'react'
import styled from "styled-components";
const DropDownGroup = styled.div`
position: absolute;
top: ${props => props.top || '48px'};
left: 0px;
box-shadow: rgba(78, 89, 93, 0.15) 0px 8px 11px 0px;
z-index: 10;
background: rgb(255, 255, 255);
padding: 9px 0px;
`
function DropDownContent({request,categories}) {
    const options = [{"label":"Gợi ý","name":"SHOW_ALL"},{"label":"Giảm giá nhiều nhất","name":"HIGHEST_DISCOUNT"},{"label":"Giá, thấp đến cao","name":"LOW_PRICE"},{"label":"Giá, cao đến thấp","name":"HIGH_PRICE"}];

  
    return (
        <DropDownGroup top="28px">

            {options.map(e => ( <DropDownItem request={() => {
                console.log(request)
                request(categories.id,{sort:e.name});
            } } filter={e.name}> {e.label} </DropDownItem>))}
       </DropDownGroup>
    )
}
const mapStatetoProps = (state) => {
    return {
        categories: state.categoryReducer.payload.categories[0]
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        request: bindActionCreators(categoryActions.request, dispatch)
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(DropDownContent)