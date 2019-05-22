import React, { Fragment } from 'react';
import '../sass/Footer.scss';
import Logo from '../image/logo1.png'
import LogoCongThuong from '../image/congthuong2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="upper mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo mb-4">
                                <a href="#"> <img src={Logo} /></a>

                            </div>
                            <div className="social">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="list-circles">
                                            <svg width="32" height="32" viewBox="0 0 32 32"><title>facebook</title><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="list-circles">
                                            <svg width="32" height="32" viewBox="0 0 32 32"><title>instagram</title><path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.406.331 2.969.55a4.952 4.952 0 0 1 1.837 1.194 5.015 5.015 0 0 1 1.2 1.838c.219.563.481 1.412.55 2.969.075 1.688.094 2.194.094 6.463s-.019 4.781-.094 6.463c-.069 1.563-.331 2.406-.55 2.969a4.94 4.94 0 0 1-1.194 1.837 5.02 5.02 0 0 1-1.837 1.2c-.563.219-1.413.481-2.969.55-1.688.075-2.194.094-6.463.094s-4.781-.019-6.463-.094c-1.563-.069-2.406-.331-2.969-.55a4.952 4.952 0 0 1-1.838-1.194 5.02 5.02 0 0 1-1.2-1.837c-.219-.563-.481-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.463s.019-4.781.094-6.463c.069-1.563.331-2.406.55-2.969a4.964 4.964 0 0 1 1.194-1.838 5.015 5.015 0 0 1 1.838-1.2c.563-.219 1.412-.481 2.969-.55 1.681-.075 2.188-.094 6.463-.094zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.837 1.85a7.833 7.833 0 0 0-1.85 2.831C.444 6.538.169 7.7.094 9.4.019 11.113 0 11.656 0 16s.019 4.887.094 6.594c.075 1.7.35 2.869.744 3.881.413 1.056.956 1.95 1.85 2.837a7.82 7.82 0 0 0 2.831 1.844c1.019.394 2.181.669 3.881.744 1.706.075 2.25.094 6.594.094s4.888-.019 6.594-.094c1.7-.075 2.869-.35 3.881-.744 1.05-.406 1.944-.956 2.831-1.844s1.438-1.781 1.844-2.831c.394-1.019.669-2.181.744-3.881.075-1.706.094-2.25.094-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.869-.744-3.881a7.506 7.506 0 0 0-1.831-2.844A7.82 7.82 0 0 0 26.482.843C25.463.449 24.301.174 22.601.099c-1.712-.081-2.256-.1-6.6-.1z"></path><path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219A8.221 8.221 0 0 0 16 7.781zm0 13.55a5.331 5.331 0 1 1 0-10.663 5.331 5.331 0 0 1 0 10.663zM26.462 7.456a1.919 1.919 0 1 1-3.838 0 1.919 1.919 0 0 1 3.838 0z"></path></svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="list-circles">
                                            <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-zalo</title><path d="M7.198 23.822zm-.119-.084l.05.031-.05-.031zM23.972 17.5c.047.075.021.154.021.228.002 1.022.002 2.044.001 3.066a3.165 3.165 0 0 1-3.168 3.19c-1.886.011-3.773.003-5.659.003H7.596c-.105 0-.209-.007-.314-.009-1.432.001-2.865.048-4.295-.008-1.692-.065-2.986-1.487-2.986-3.182.001-5.467.012-10.934.001-16.4-.004-1.873 1.456-3.178 3.139-3.221 1.763-.046 3.528-.012 5.292-.011.031 0 .071-.015.092.036-.011.093-.104.103-.165.139-1.038.609-1.986 1.338-2.782 2.237C4.26 5.056 3.352 6.767 3.044 8.749c-.546 3.509.548 6.481 3.03 8.966.442.443.499.792.144 1.39-.425.717-1.069 1.206-1.753 1.651-.073.047-.149.091-.216.146-.112.092-.042.142.051.182 1.338.263 2.641.082 3.927-.312.434-.133.869-.262 1.308-.375.299-.077.595-.065.9.039 3.323 1.145 6.605 1.042 9.828-.377a11.557 11.557 0 0 0 3.53-2.421c.051-.052.089-.129.181-.136zM8.095 12.252c.793 0 1.533-.005 2.273.002.416.004.64.18.678.508.048.414-.193.689-.642.695-.847.009-1.694.004-2.541.004-.244 0-.489.008-.733-.006-.304-.017-.601-.077-.746-.391-.146-.314-.044-.596.157-.852.809-1.03 1.62-2.058 2.429-3.087l.142-.185c-.05-.089-.128-.049-.189-.05-.567-.004-1.135 0-1.703-.004a1.577 1.577 0 0 1-.388-.044c-.264-.069-.423-.28-.425-.531s.153-.465.416-.54c.124-.035.258-.047.388-.047.934-.004 1.869-.004 2.803 0 .165 0 .331.004.491.06.354.122.51.449.366.795-.125.301-.325.557-.525.811-.685.872-1.373 1.741-2.059 2.612l-.191.251zm6.079-2.758c.128-.161.254-.312.47-.356.412-.084.802.184.808.602.014 1.047.009 2.095.003 3.142a.618.618 0 0 1-.436.593.641.641 0 0 1-.732-.203c-.089-.111-.126-.131-.25-.031-.477.387-1.015.455-1.597.266-.933-.303-1.317-1.03-1.419-1.921-.109-.957.209-1.778 1.066-2.281.711-.418 1.433-.383 2.087.188zm-1.853 1.916c.005.18.065.423.221.633a.86.86 0 0 0 1.374-.001c.294-.396.293-1.053-.002-1.449a.796.796 0 0 0-.622-.334c-.574-.034-.977.41-.971 1.151zm7.583-2.36c1.334-.041 2.313.856 2.353 2.164.04 1.324-.772 2.264-2.025 2.389-1.36.137-2.445-.855-2.426-2.163-.04-1.346.843-2.351 2.099-2.389zm.801 3.008c.305-.396.306-1.069.005-1.469a.8.8 0 0 0-.623-.331c-.566-.03-.961.403-.963 1.054a1.19 1.19 0 0 0 .223.736.861.861 0 0 0 1.358.01zm-3.359-1.661c0 .812.004 1.623-.002 2.435a.676.676 0 0 1-.853.667c-.265-.067-.463-.348-.463-.674-.002-1.388-.001-2.776-.001-4.164 0-.244-.003-.489.001-.733.007-.402.264-.664.649-.668.398-.004.665.259.668.676.005.821.001 1.641.001 2.462z"></path></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="d-block mb-3">Liên hệ</h3>
                            <a className="d-block mb-3">19006710</a>
                            <a className="d-block"> help@leflair.vn</a>
                        </div>
                        <div className="col-md-4">
                            <h3 className="d-block mb-3">Chăm sóc khách hàng</h3>
                            <a className="d-block mb-3">Hỏi đáp</a>
                            <a className="d-block mb-3">Điều khoản & quy định</a>
                            <a className="d-block"> Giao hàng</a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="lower">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="#" className="gov-link">
                                    <img src={LogoCongThuong} />
                                </a>
                                <span>Copyright @ 2018 leflair.vn</span>
                            </div>
                            <div className="col-md-6">
                                Công ty Cổ phần Leflair  - Tầng 16, Tháp A2, Tòa nhà Viettel, 285 Cách Mạng Tháng Tám, P.12, Q.10, TP.HCM
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                            Cơ quan cấp: Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
