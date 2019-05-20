import React, { useState } from 'react';

export default function Login(props) {
    const {alert} = props;

    const {loginRequest} = props;
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    if (props.payload.user.remember_token !== undefined) {
       
     props.history.push("/account/")
    }
    function handleLogin(e) {
        e.preventDefault();
        loginRequest({email, password},props.history);
    }
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card shadow-sm my-5">
                        <div className="card-body">
                            <h3> Sign Up </h3>

                            <div className="form-group">
                                <label htmlFor="email" className="jsx-209944769 "><span className="jsx-209944769">Địa chỉ email</span></label>
                                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="example@gmail.com" onChange={(e) => updateEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="jsx-209944769  with-suffx"><span className="jsx-209944769">Mật khẩu</span><span className="jsx-209944769 suffix"><a href="/vn/auth/forgot-password?email=">Quên mật khẩu?</a></span></label>
                                <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" onChange={(e) => updatePassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                </div>
                            </div>
                            <div>
                                {alert? alert.message : null}
                            </div>
                            <div onClick={handleLogin} className="btn btn-primary btn-user btn-block" >
                                Login
                             </div>
                            <hr />
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                Login with Google
                                </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                Login with Facebook
                                </a>
                    
                            <div className="text-center">
                                <a className="small" href="forgot-password.html">Tạo tài khoản mới</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}