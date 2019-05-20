import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ListItems } from './ListItems';
import { DropMenu } from './DropMenu'
import Nofication from '../image/notification.png';
import useDropDown from '../component/DropDown';
import Error1 from '../image/Error.png';

export default function Header(props) {
    console.log(props)
    const { first_name, last_name, avatar } = props.payload.user;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const actionEl = useRef(null);
    const dropEl = useRef(null);
    const actionNotificalEl = useRef(null);
    const dropNotificalEl = useRef(null);
    const actionMessageEl = useRef(null);
    const dropMessageEl = useRef(null);
    const [dropOpen, toggleDrop] = useDropDown(dropEl, actionEl);
    const [dropNotification, toggleDropNoti] = useDropDown(dropNotificalEl, actionNotificalEl)
    const [dropMessage, toggleMessage] = useDropDown(dropMessageEl, actionMessageEl);
    return (

        <TopBar>
            <ListItems >
                <DropDown ref={dropNotificalEl} onClick={() => toggleDropNoti()} >
                    <ItemLink > <img src={Nofication} /><Badge> 3+ </Badge></ItemLink>

                    <DropDownMenu ref={actionNotificalEl} hidden={!dropNotification}>
                        <DropDownHeader>Alerts Center </DropDownHeader>

                        <DropItem>
                            <div className="mr-3">
                                <img src={Error1} />
                            </div>
                            <div>
                                <DropItemDate>
                                    December 12, 2019
                                 </DropItemDate>

                                <span className="font-weight-bold ">
                                    $290.29 has been deposited into your account!
                                 </span>
                            </div>
                        </DropItem>

                    </DropDownMenu>
                </DropDown>

                <DropDown onClick={() => toggleMessage()} >
                    <ItemLink ref={actionMessageEl}> <img src={Nofication} /><Badge> 3+ </Badge></ItemLink>
                    <DropDownMenu ref={dropMessageEl} hidden={!dropMessage} >
                        <DropDownHeader>Alerts Center </DropDownHeader>

                        <DropItem>
                            <div className="mr-3">
                                <img src={Error1} />
                            </div>
                            <div>
                                <DropItemDate>
                                    December 12, 2019
                          </DropItemDate>

                                <span className="font-weight-bold ">
                                    $290.29 has been deposited into your account!
                          </span>
                            </div>
                        </DropItem>
                    </DropDownMenu>
                </DropDown>
                <TopbarDivider />

                <DropDown ref={dropEl} onClick={() => toggleDrop()} >
                    <ItemLink  >
                        <User>{first_name} {last_name} </User>

                        <ImgProfile src={process.env.REACT_APP_PUBLIC_URL + '/images/' + avatar} />
                    </ItemLink>

                    <DropMenu  hidden={dropOpen} />

                </DropDown>

            </ListItems>
        </TopBar>
    )
}
const DropDownHeaderInterface = styled.div`
display: block;
padding: .5rem 1.5rem;
margin-bottom: 0;
font-size: .875rem;
color: #858796;
white-space: nowrap;
`

const DropDownInterface = styled.div`
position: absolute;
z-index: 1000;
min-width: 10rem;
font-size: .85rem;
background-color: #fff;
list-style: none;
margin: .125rem 0 0;
color: #858796;
right: 0;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
`
const DropItemInterface = styled.a`
width: 100%;
padding: .25rem 1.5rem;
background-color: transparent;
border: 0;
clear: both;
font-weight: 400;
color: #3a3b45;
text-align: inherit;

white-space: normal;
padding-top: .5rem;
padding-bottom: .5rem;
border-left: 1px solid #e3e6f0;
border-right: 1px solid #e3e6f0;
border-bottom: 1px solid #e3e6f0;
line-height: 1.3rem;
`
const DropDownHeader = styled(DropDownHeaderInterface)`
background-color: #4e73df;
border: 1px solid #4e73df;
padding-top: .75rem;
padding-bottom: .75rem;
color: #fff;
`
const DropItem = styled(DropItemInterface)`
display: flex;
align-items: center;
`
const DropItemDate = styled.div`
color: #b7b9cc!important;
font-size: 80%;
font-weight: 400;
`
const DropDownMenu = styled(DropDownInterface)`
width: calc(100% - 30%)!important;
top: 20%;

@media (min-width: 576px) {
    width: 20rem!important;
    top: 100%;
}
`
const Badge = styled.span`
    left: 1.2rem;
    position: absolute;
    bottom: 2rem;
    font-size: 60%;
    display: inline-block;
    text-align: center;
    border-radius: 0.35rem;
    color: #fff;
    padding: .25em .4em;
    background-color: #e74a3b;  
`
const TopBar = styled.div`
background-color: #fff!important;
height: 4.375rem;
margin-bottom: 1.5rem!important;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
display: flex;
align-items: center;
padding: .5rem 1rem;
flex-flow: row nowrap;
justify-content: flex-end;
`
const ItemLink = styled.a`
display: flex;
position: relative;
align-items: center;
padding: 0 .75rem;
height: 4.375rem;
`
const ImgProfile = styled.img`
margin-left: .5rem!important;
    height: 2rem;   
    width: 2rem;
    border-radius: 50% !important;
`
const TopbarDivider = styled.div`
width: 0;
border-right: 1px solid #e3e6f0;
height: calc(4.375rem - 2rem);
margin: auto 1rem;
display: none!important;
@media (min-width: 576px) {
    display: block!important;
}w
`
const User = styled.span`
margin-right: .5rem!important;
color: #858796!important;
font-size: 80%;
font-weight: 400;
display: none;
@media (min-width: 992px){
    display: inline!important;
}
`
const DropdownToggle = styled.a`
height: 4.375rem;
display: flex;
align-items: center;
    padding: 0 .75rem;
`
const DropDown = styled.li`
position: static!important;
@media (min-width: 576px){
   position: relative !important;
}
`