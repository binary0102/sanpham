import React, { useState ,useEffect} from 'react';
import '../sass/Asider.scss';
import styled from "styled-components";
import { categoryActions} from '../actions/category.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
const TitleFiter = styled.div`
display: flex;
justify-content: space-between;
`
const Side = styled.div`
overflow: hidden;

`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`   
const CustomeControll = styled.label`

position: relative;
display: block;


`
const LabelInput = styled.div`
    display: inline-block;
    width: 1rem;
    height: 1rem;
  transition: all 150ms;
  background-color: ${props => (props.checked ? '#16accf' : '#fff')};
  border: 1px solid rgba(78,89,93,.3);
    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`;
const CheckBox = styled.div`
display: inline-block;
vertical-align: middle;
height: 17.5px;
`
const TextCategory = styled.span`
margin-left: 0.5rem;
height: 1rem;
font-weight: 400;
width: 100%;

`
function Asider({categories,...props}) {

    const {  action}  = props;
    if ( categories[0]._id ) {
        
        action(categories[0]._id)
    }
    return (
        <div className=" col-5  col-lg-3 col-md-3">
            <Side>
                <TitleFiter>
                    <div>  Phân loại sản phẩm</div>
                    <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-minus</title><path d="M5 11h15v1H5v-1z"></path></svg>
                </TitleFiter>
                <div className="sale-filter-content mt-4">
                    
                       { categories.map(category => ( 
                           <ListItem  key={category.id} category={category} action={action}/>
                       ))} 
                   
                </div>
            </Side>
        </div>
    )
}
const ListItem = (props) => {
    
    const { category , action} = props; 
    const [checked, setChecked] = useState(false);
    return (
        <CustomeControll onClick={(e) => {  setChecked(!checked); action(category._id)}}>
            <CheckBox  >
                <LabelInput checked={checked} >
                    <Icon viewBox="0 10 19 23">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </LabelInput>
            </CheckBox> 
            <TextCategory> {category.name}</TextCategory>
        </CustomeControll>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(categoryActions.request, dispatch)
    };
}
export default withRouter(connect(null, mapDispatchToProps)(Asider));