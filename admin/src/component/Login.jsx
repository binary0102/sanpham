import React, { useState, useEffect } from 'react';
import { InputForm } from './InputForm';
import { LinkButton } from './LinkButton';
import Logo from '../image/logo.jpeg';
import {Redirect} from 'react-router-dom'
import '../sass/styles.scss';
import styled from 'styled-components';

const ErrorAlert = styled.div`
padding: 0.8rem;
margin-top: 1rem;
border-radius: .25rem;
background-color: #e74a3b!important;
color: #fff!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;
`

export default function Login({alert,...props}) {
    const {loginRequest} = props;
    
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const {isLoggedIn} = props.authencation;
    function handleLogin(e) {
        e.preventDefault();
        loginRequest({email, password});
    
        
        updatePassword("");
    }
     
    useEffect(() => {
        function handleEnter(e) {
            if (e.keyCode === 13) {
                loginRequest({email, password});
            }
         
        }
        document.addEventListener("keypress", handleEnter)
        return () => document.removeEventListener("keypress",handleEnter) 
    })
    return (
       
        <div>
            {isLoggedIn ? <Redirect to="/account" /> :  <div className="container"> <div className="row justify-content-center" >
                <div className="col-xl-12 col-lg-12 col-md-9">
                    <div className="shadow-lg my-5 ">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block">
                                <img src={Logo} />
                        </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <div>
                                        <InputForm value={email} type="email" onChange={(e) => updateEmail(e.target.value)} placeholder="Enter Email Address..." />
                                        <InputForm value={password}type="password" onChange={(e) => updatePassword(e.target.value)} placeholder="Password..." />
                                        <LinkButton onClick={handleLogin} className="btn btn-primary btn-block btn-user"> Login </LinkButton>
                                        {alert !== undefined ? <ErrorAlert>{ alert.message } </ErrorAlert> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </div>}
            
            </div>
        
    )
}