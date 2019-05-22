import React, { Fragment,useEffect,useState } from 'react';
import {withRouter} from 'react-router'
import Logo from '../logo.png';
import '../sass/PageHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Link from './LinkRouter';
import OrderCheck from './CheckOrder';

function PageHeader(props) {
    const {user } = props.payload;
    console.log(user);
    const {authRequest} = props;
    useEffect(() => {
        authRequest();
    },[])
    const { match, location, history } = props;
    return (
        <Fragment>

            <div className="page-header p-0 shadow mb-4  position-relative">
                <div className="main-menu">
                    <div className="container">
                        <div className="navbar navbar-expand-md ">
                       
                            
                            <div className="navbar-brand">
                                <Link to="/" >
                                    <img src={Logo} className="left-logo" />
                                </Link>
                                <div className="search-bar">

                                </div>

                            </div>
                            <div className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </div>
                            <ul className="navbar-nav  navbar-expand-md ml-auto hidden-lg">
                               {user.remember_token === undefined ?  <Fragment><li className="nav-item">
                                    <Link to="/login" className="nav-link"> Đăng nhập </Link>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link"> Tạo tài khoản </a>
                                </li></Fragment>:  <li className="nav-item">
                                    <Link to="/account" className="nav-link">Tài khoản</Link>
                                </li>}
                                <li className="nav-item">
                                    <Link to={"/cart"} className="nav-link">Giỏ hàng </Link>
                                </li>
                            </ul>
                        
                            <OrderCheck user={user} />
                          
                        </div>
                    </div>

                </div>
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-mega">
                                <a className="nav-link">
                                    <span className="title_">Danh mục sản phẩm</span>
                                </a>
                            </div>
                            <div className="col-lg-9 col-md-9 hidden-lg">
                                <div className="bg-header-nav">
                                    <div className="row row-noGutter-2">
                                        <nav className="header-nav">
                                            <ul className="item_big ">
                                               
                                                
                                                <li className="nav-item active">
                                                    <Link to="/category/trang-suc">
                                                    <div className="nav-link">
                                                        <span>Trang sức</span>
                                                    </div>
                                                    </Link>
                                                </li>
                                                <li className="nav-item active">
                                                     <Link to="/category/vong-co">
                                                    <div className="nav-link">
                                                        <span>Vòng cổ</span>
                                                    </div>
                                                    </Link>
                                                </li>
                                                <li className="nav-item active">
                                                     <Link to="/category/bo-trang-suc">
                                                    <div className="nav-link">
                                                        <span>Bộ trang sức</span>
                                                    </div>
                                                    </Link>
                                                </li>
                                                <li className="nav-item active">
                                                     <Link to="/category/vong-tay">
                                                    <div className="nav-link">
                                                        <span>Vòng tay</span>
                                                    </div>
                                                    </Link>
                                                </li>
                                                <li className="nav-item active">
                                                    <Link to="/cart">
                                                       
                                                        <div className="nav-link">
                                                        <span>Đơn hàng</span>
                                                    </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </Fragment>
    );
}
export default withRouter(PageHeader);