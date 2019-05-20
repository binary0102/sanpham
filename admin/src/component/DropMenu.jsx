import styled from 'styled-components';
import React from 'react'; 

export const DropMenu = ({hidden}) => {
    
    return   <DropDownMenu hidden={!hidden}>
                        <DropDownItem href="#"> Profile</DropDownItem>
                        <DropDownItem href="#"> Settings </DropDownItem>
                        <DropDownItem href="#"> Activity Log</DropDownItem>
                        <DropDownDivider />
                        <DropDownItem href="#"> Logout</DropDownItem>
    </DropDownMenu>

}
const DropDownMenu = styled.div`
display: block;
z-index:1000;
background-color: #fff;
border: 1px solid #e3e6f0;
position: absolute;
top: 9%;
padding:0 1.5rem;
color: #858796;
left: auto;
margin-top: 0.5rem;
min-width: 10rem;
border-radius: 0.35rem;
midth: calc(100% - 40%);
right: .75rem;  
font-size: .85rem;
padding: .5rem 0;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
@media (min-width: 576px){
    width: auto;
    right: 0;
    top: 100%;
}
`
const DropDownItem = styled.a`
display: block!important;
padding: .25rem 1.5rem;
width: 100%;
clear: both;
font-weight: 400;
color: #3a3b45;
text-align: inherit;
white-space: nowrap;
background-color: transparent;
border: 0;
text-decoration: none;
:hover {
    color: #2e2f37;
    text-decoration: none;
    background-color: #f8f9fc;
}
:active {
    color: #fff;
    text-decoration: none;
    background-color: #4e73df;
}

`

const DropDownDivider = styled.div`
height: 0;
margin: .5rem 0;
overflow: hidden;
border-top: 1px solid #eaecf4;
`