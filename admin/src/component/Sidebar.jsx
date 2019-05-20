import styled from 'styled-components';
import React, { useState } from 'react';
import { SiderBrand, SideBarToggler, ButtonSideBar } from './SiderBrand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faDotCircle , faBookOpen} from '@fortawesome/free-solid-svg-icons'

export const Temp = styled.ul`
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
list-style: none;
width: 6.5rem;
min-height: 100vh;
background-color: #4e73df;
background-size: cover;
background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);
background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));
@media(min-width: 768px) {
    width: ${props => props.toggled ? null : "14rem!important"};
}
`
const Icon = styled.div`
display: block;

margin-right: 0.3rem;
@media (min-width: 768px) {
    display:  ${props => props.toggled ? "block" : "inline"};;
}
`
const Hr = styled.hr`
border-top: 1px solid rgba(255,255,255,.15);
margin: 0 1rem 1rem;
margin-bottom: 0!important;
margin-top: 0!important;
`
const HeaderDashBroad = styled.a`
height: 4.375rem;
text-decoration: none;
font-size: 1rem;
font-weight: 800;
padding: 1.5rem 1rem;
text-align: center;
text-transform: uppercase;
letter-spacing: .05rem;
z-index: 1;
color: #fff!important;
align-items: center!important;
display: flex;

justify-content: center!important;
`
export const SideBar = () => {
    const [toggled, setToggle] = useState(false);
    return (
        <Temp toggled={toggled}>
            
            <HeaderDashBroad >
                <div style={!toggled ? { marginRight: "1rem"}: null}>
                    <FontAwesomeIcon icon={faDotCircle} color={toggled ? "#fff" : null} size="2x" />
                </div>
                <div style={toggled ? {display:"none"}: null}>
                    ADMIN THEME
                </div>
                
            </HeaderDashBroad>
            <Hr />
            <SiderBrand toggled={toggled} path={"/account/"} Icon={IconWarper} >
            
                Home
            </SiderBrand>
            <Hr />
            <SiderBrand toggled={toggled} path={"/account/order"} Icon={IconWarper} > Order
            </SiderBrand>
            <Hr />
            <SiderBrand toggled={toggled} path={"/account/product"} Icon={IconWarper}> Product
            </SiderBrand>
            <Hr />
            <SiderBrand toggled={toggled} path={"/account/message"} Icon={IconWarper}> Message
            </SiderBrand>
            <SideBarToggler>
                <ButtonSideBar onClick={() => { setToggle(!toggled) }} />
            </SideBarToggler>
        </Temp>
    )
}

const IconWarper = ({toggled}) => (
    <Icon toggled={toggled}><FontAwesomeIcon icon={faAddressCard} size="1x" /></Icon>
)