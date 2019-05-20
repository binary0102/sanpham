import React from 'react';
import Avatar from '../image/avatar.jpeg'
import styled from 'styled-components';
const AvatarImg = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
`
const Img = styled.img`
border-radius: 50%;
weight: 100%;
height: 100%;
display: block;
`

export default function AccountPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="py-2 d-flex align-items-center border-bottom">
                        <div>
                        <a> <AvatarImg> <Img src={Avatar}/> </AvatarImg></a>
                        </div>
                        <div className="ml-3">
                            <div> binary01232</div>
                            <a> 
                                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "4px"}}><path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48" fill="#9B9B9B" fill-rule="evenodd"></path></svg>
                                    Sửa hồ sơ
                            </a>
                        </div>
                    </div>
                    <div className="py-2">
                        <a> Thông tin tài khoản </a>
                    </div>
                    <div className="py-2">
                    <a>  Quản lý đơn hàng</a>
                    </div>
                    <div className="py-2">  <a>  Địa chỉ của tôi </a></div> 
                </div>
              
            </div>
        </div>
    )
}