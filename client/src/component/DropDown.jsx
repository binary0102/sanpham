import React, { useState, useEffect } from 'react';
import DropDownContent from '../container/DropDownContent';

import '../sass/DropDown.scss';
import styled from "styled-components";
const DropDownButton = styled.div`
    display: inline-flex;
    position: relative;
    overflow: visible;
    padding: 0px 8px;
`;


const Label = styled.label`
margin-right: 8px;
margin-bottom: 0px;
font-weight: 400;
`
const ButtonItem = styled.div`
    &:active {
        background: rgba(78,89,93,.3);
    }
    &:after {
        display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.3em;
    vertical-align: middle;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-left: 0.3em solid transparent;
    }
    ${props => props.addStyle || null }
`
export default class DropDown extends React.Component {
    constructor(props) {
        super();

        this.state = {
            showMenu: false,
        };
   

    }
    showMenu = (event) => {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    render() {
        const {  selectedOption, label } = this.props;
        const Content = this.state.showMenu ? <DropDownContent /> : null;
        return (
            <div>
                 <Label>
                    { label? label : null}
                </Label>
               <DropDownButton  onClick={this.showMenu} > 
                <div >
                        <ButtonItem> { selectedOption ? selectedOption.label : null}</ButtonItem>
                </div>           
                {Content}
            </DropDownButton>
            </div>
        )
    }
}
