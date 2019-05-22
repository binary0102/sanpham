import React from 'react';
import styled from 'styled-components';
const AccountHeader = styled.div`
align-items: center;
border-bottom: 1px solid #efefef;
padding-bottom: .5rem!important;
padding-top: .5rem!important;
height: 67px;
display: flex
`
const AccountHeaderTitle = styled.div`
    flex: 1;
    
`
const AccountHeaderButton = styled.div`
margin-left: 10px;
height: 40px;
    padding: 0 20px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 400;
`
const FiledContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .625rem;
`
export default function Address() {
    return (
        <div className="col-lg-9">
        <div style ={{background:"#fff"}}className="d-flex flex-column">
            <AccountHeader>
                <AccountHeaderTitle> Địa chỉ của tôi</AccountHeaderTitle>
                <AccountHeaderButton className="btn btn-primary "> Thêm địa chỉ mới </AccountHeaderButton>
            </AccountHeader>
            <div>
                  <div className="row">
                        <div className="col-lg-9">
                            <FiledContainer>
                                <div> Tên </div>
                                <div><span> aa va a</span></div>
                            </FiledContainer>
                            <FiledContainer>

                            </FiledContainer>
                                <div> Số điện thoại</div>
                                <div> <span> 0981444222</span></div>
                            <FiledContainer>
                                <div> Địa chỉ</div>
                                <div>  <span>a</span> </div>
                            </FiledContainer>
                        </div>
                        <div className="col-lg-3">
                            a
                        </div>  
                  </div>

            </div>
        </div>
        </div>
    )
}