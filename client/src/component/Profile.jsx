import React from 'react';
import Avatar from '../image/avatar.jpeg'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEmail, faAddressCard, faMapMarked, faEnvelope, faPhone, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import "../sass/Profile.scss";
const ImageAvatar = styled.img`
width:70px;
height:70px;
border-radius: 50%;
`
export default function Profile() {
    return (
        <div className="container mb-4">
            <div className="mb-4">

            </div>
            <div className="row " >
                <div className=" col-md-6 ">
                    <div className="card shadow p-4  align-items-center  justify-content-center" style={{ height: "154px" }}>
                        <h3 className="h5">Nguyễn Đình Trung </h3>
                        <h3 className="h5"> Web Developer </h3>
                        <div >
                            <ImageAvatar src={Avatar} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="card shadow p-4" style={{ height: "154px" }}>
                        <h3 className="text-center h5">Thông tin  </h3>
                        <div>
                            <FontAwesomeIcon icon={faBirthdayCake} />
                            <span className="ml-2">7/12/1998 </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faMapMarked} />
                            <span className="ml-2">Đường 50 ,Phường Hiệp Bình Chánh ,Quận Thủ Đức, TPHCM </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="ml-2">nguyendinhtrung0798@gmail.com  </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <span className="ml-2">0949834661 </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mb-4"></div>



            <div className="row">
                <div className="col-md-12">
                    <div className="shadow card p-4">
                        <div className="mb-2 h4 text-center">

                            THÔNG TIN TỔNG QUÁT
                        </div>
                        <div >
                            Em tên là Nguyễn Đình Trung . Em 21 tuổi mong muốn em trở thành lập trình , 
                             mong muốn được làm việc công ty công nghệ , mỗi ngày nỗ lực học để trau dồi bản thân
                             Đam mê học ngôn ngữ mới và công nghệ mới liên quan tới máy tính
                        </div>
                    </div>
                </div>

            </div>
            <div className="mb-4">

            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="shadow card p-4">
                        <div className="mb-2 h4 text-center">
                            KỸ NĂNG
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div> - Ngôn ngữ</div>
                                <ul>
                                    <li>Nắm vững kiến thức về  javascript </li>
                                    <li>Có kiến thức phát triển HTML,CSS,DOM </li>

                                </ul>
                                <div> - FrameWorks & platforms </div>
                                <ul>
                                    <li> Kinh nghiệm làm việc với  React,Redux,Redux-saga
                            </li>
                                    <li> Hiểu biết github ,công nghệ ảo hoá docker
                            </li>
                                    <li>Có kiến thức CSS Framework Bootstrap</li>
                                    <li> Có kiến thức Phát triển RestfulAPI </li>
                                </ul>
                            </div>
                            <div className="col-md-6">

                                <ul>
                                    <li> Hiểu biết cơ bản database mongodb và mysql </li>
                                    <li> Có kiến thức nền tảng về lập trình hướng đối tượng và cấu trúc giải thuật </li>
                                   
                                </ul>
                                <div className=""> - Khác </div>
                                <ul>
                                    <li>  Có tìm hiểu qua React Native</li>
                                    <li>  Có khả năng tự học công nghệ mới  </li> 
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

            <div className="mb-4"></div>

            <div className="mb-4"></div>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="shadow card p-2">
                        <div className="mb-2 h4 text-center">
                            PROJECT
                        </div>
                        <div className="row">
                            <div className="col-md-6">



                                <ul>
                                    <li>Dự án : cửa hàng </li>
                                    <li>Mô tả dự án: Xây dựng trang bán hàng sử dụng framework express
                                    Xây dựng Restful api, tính năng cơ bản đăng nhập , hiện thị sản phẩm , thêm giỏ hàng
                            </li>
                                    <li>Công nghệ sử dụng  và thư viện  :
                                <ul>
                                            <li> Back-end: Nodejs,Docker,Express,Mongodb,JWT </li>
                                        </ul>
                                        <ul>
                                            <li> Front-end: React,React-Saga,Redux,Bootstrap,React Router </li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                            <div className="col-md-6">


                                <ul>
                                    <li>Dự án : Chat </li>
                                    <li>Mô tả dự án: Xây dựng web application chat real-time,
                                    dự án sử dụng JSON Web Token để xác thực người dùng truy cập server,
                            dùng thư viện Socketio làm việc giao thức Websocket để phản hồi nhanh giữa client và server </li>
                                    <li>Công nghệ sử dụng và thư viện :
                                <ul>
                                            <li> Back-end: Nodejs,Docker,SocketIo,Mongodb </li>
                                        </ul>
                                        <ul>
                                            <li> Front-end: React,React-Saga,Redux,Socketio,Bootstrap </li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}