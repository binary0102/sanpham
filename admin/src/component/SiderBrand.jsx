import styled from 'styled-components';
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
export const SiderBrand =({children,toggled, path,Icon}) => {
    const [active, setActive] = useState(false);
    function OnSelect () {
        setActive(!active)
    }
 
    return (
    <li onMouseEnter={OnSelect} onMouseLeave={OnSelect}>
        <NavLink toggled={toggled}><Link to={path}> <SpanItem active={active}>{Icon({toggled})}{children}</SpanItem> </Link></NavLink>
    </li>
    )
}
export const NavLink = styled.div`
text-align: center;
padding: .75rem 0.85rem;
@media(min-width: 768px) {
display: block;

${props => props.toggled ?"    text-align: center;padding: .75rem 1rem; width:6.5rem" : "text-align: left;padding: 1rem; width:14rem"};

}
`
export const SpanItem = styled.span`
font-size: .65rem;
display: block;
font-weight: ${props => props.active ? "700" : null};
color: ${props => props.active?" #fff" :"#ffffffcc" };
@media(min-width: 768px) {
font-size: .85rem;
display: inline;
}
`
export const SideBarToggler = styled.div`
display: inline!important;
text-align: center!important;
display: none!important;

@media (min-width: 768px){
    display: flex!important;
    justify-content: center!important;
}
`
export const ButtonSideBar = styled.div`
width: 2.5rem;
height: 2.5rem;
text-align: center!important;
margin-bottom: 1rem;
cursor: pointer;
border-radius: 50%!important;
border: 0!important;
background-color: rgba(255,255,255,.2);
`