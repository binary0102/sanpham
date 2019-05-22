import styled from "styled-components";
import React from 'react';
export const DropDownItem1 = styled.div`
display: block;
width: 100%;
padding: .6875rem 1rem;
clear: both;
font-weight: 300;
color: #4e595d;
text-align: inherit;
white-space: nowrap;
background-color: transparent;
border: 0;
cursor: pointer;

&:hover {
    color: #4e595d;
    text-decoration: none;
    background-color: rgba(78,89,93,.15);
}
&:focus {
    color: #4e595d;
    text-decoration: none;
    background-color: rgba(78,89,93,.15);
}
`
export default function DropDownItem(props) {

    return( 
        <DropDownItem1 onClick={props.request}>{props.children}</DropDownItem1> 
    ) 
     
  
}