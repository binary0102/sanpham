import React, { useEffect, useRef,useCallback, useState, Fragment } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../image/avatar.jpeg'
const OrderNotification = styled.span`
position: absolute;
border-radius: 20px;
width: 20px;
height: 20px;
background-color: #FB3C18;
left: -5px;
text-align: center;
bottom: 10px;
line-height: 19px;
font-size: 12px;
color: #fff;
font-weight: 600;

`

const OrderWarpper = styled.div`
position: absolute;
background: rgba(0,0,0,0.55);
z-index: 100;
top: 0;



right: 0;


${props => props.isShowOrder === false ? "display: none opacity: 0;transition: opacity 0.5s;" : "display: block; width: 100%; height: 100%;  opacity: 1;"}



`
const OrderContent = styled.div`

background-color: rgb(255, 255, 255);
display: block;
overflow-y: scroll;
margin-bottom: 0px;
position: fixed;
top: 0px;
z-index: 4;
bottom: 0px;
width: 450px;
${props => props.isShowOrder === false ? "transform:  translate3d(450px, 0px, 0px);" : " transform: translate3d(0px, 0px, 0px);"}
right: 0px;
transition: transform 0.25s ease 0s;
`
const OrderCart = styled.div`

`
const OrderCartHeader = styled.div`
display: flex;
background-color: rgba(83, 94, 99, 0.06);
padding: 6px 16px 4px;
`
const ActionFaTimes = styled.div`
flex: 0 1 0;
display: flex;
align-items: center;
`
const HeaderCenter = styled.div`
flex: 1
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const OrderCartContent = styled.div`

`
const CartBody = styled.div`
`
const CartFilterWarpper = styled.div`

`
const CartFilterContainer = styled.div`

`
const CartProduct = styled.div`
display: flex;
padding: 1rem 1rem;

`
const CartProductImage = styled.div`

height: 120px;
width: 120px;
`
const CartProductInfo = styled.div`
flex: 1;
margin-left: 1rem;
`
const CartProductName = styled.div`
margin-bottom: 4px;
font-size: 0.875rem;
font-weight: 500;
cursor: pointer;
`
const CartProductDetai = styled.div`
display: flex;

`
const CartProductQuanlity = styled.div`

`
const CartProductPriceWrap = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: flex-end;
`
const CartActionContainer = styled.div`
display:flex;
justify-content:center;
flex-direction: row;
align-items: center;
`

const CartAction = styled.div`
width: 28px;
height: 28px;
text-align: center;
line-height: 20px;
padding: 3px 9px;
border-radius: 3px 0 0 3px;
    border-right: 0;
    border: 1px solid #dfdfdf;
    background: #fff;
    font-size: 14px;
    font-weight: 300;
&:hover {
    background: #f8f8f8!important;
}
`
const CartActionQuanlity = styled.div`
padding: 4px 13px;
background-color: #fff;
border: 1px solid #ccc;
width: 35px;
height: 28px;
font-size: 14px;
font-weight: 300;
line-height: 20px;
`
const CartFooter = styled.div`
padding: 1rem;
`
const ProductRetailPrice = styled.div`
color: rgba(78, 89, 93, 0.7);
font-weight: 400;
display: block;
font-size: 0.875rem;
margin-bottom: 2px;
text-decoration: line-through;
`
const ProductSalePrice = styled.div`
font-size: 0.875rem !important;
line-height: 1.63rem !important;
font-weight: 500;
    display: block;
  
`
const ActionQuanlity = styled.div`

font-size: 0.75rem;
font-weight: 300;
color: #4e595d;
margin-bottom: 3px;
display: block;
`
 const CheckOrder = ({ isShowOrder,actionRef, setShowOrder,user }) => {
    const {cart} = user;

    const refElementOrder = useRef(null);

    const onWindowClick = (event) => {

        
        if (!actionRef.current.contains(event.target) && event.target !== refElementOrder.current && !refElementOrder.current.contains(event.target)) {
   
             setShowOrder(false);
        }
    }

    useEffect(() => {
        window.addEventListener("click", onWindowClick)
        return () => {
            window.removeEventListener("click", onWindowClick);
        }
    }, [])
    return (
        <OrderWarpper isShowOrder={isShowOrder} >

            <OrderContent isShowOrder={isShowOrder} ref={refElementOrder} >
                <OrderCart>
                    <OrderCartHeader>
                        <ActionFaTimes onClick={() => { setShowOrder(false) }}   >
                            <FontAwesomeIcon icon={faTimes} />
                        </ActionFaTimes>
                        <HeaderCenter>
                            <div>
                                Gio Hang
                        </div>
                            <div>
                                5 san pham
                        </div>
                        </HeaderCenter>
                      
                    </OrderCartHeader>
                    <CartBody>
                            <CartFilterWarpper>
                                <CartFilterContainer>
                                        {cart.map(cart => {
                                            return (
                                                <CartProduct>
                                                <CartProductImage>
                                                    <img style={{width: "100%",height: "100%"}} src={`/images/w510/${cart.image}`} />
                                                </CartProductImage>
                                                <CartProductInfo>
                                                    <CartProductName>Máy Massage Da Mặt Micro Current #CESO2- NC</CartProductName>
                                                    <CartProductDetai>  
                                                      
                                                        <CartProductQuanlity>
                                                            <ActionQuanlity>
                                                                So luong
                                                            </ActionQuanlity>
                                                            <div>
                                                            <CartActionContainer>
                                                                <CartAction>
                                                                    -
                                                                </CartAction>
                                                                <CartActionQuanlity>
                                                                   {cart.quanlity}
                                                                </CartActionQuanlity>
                                                                <CartAction>
                                                                    +
                                                                </CartAction>
                                                            </CartActionContainer>
                                                            </div>
                                                        </CartProductQuanlity>
                                                        <CartProductPriceWrap>
                                                            <ProductRetailPrice>
                                                                   {cart.salePrice}
                                                            </ProductRetailPrice>
                                                            <ProductSalePrice>
                                                                   {cart.retailPrice}
                                                            </ProductSalePrice>
                                                        </CartProductPriceWrap>
                                                    </CartProductDetai>
                                                </CartProductInfo>
                                        </CartProduct>
                                            )
                                        })}

                                </CartFilterContainer>
                            </CartFilterWarpper>
                        </CartBody>
                    <CartFooter>
                        <div className="row">
                            <div className="col-6 h4">
                            Thành tiền :

                            </div>
                            <div className="col-6 text-right" >
                                 {cart.reduce((total, cart) => {
                                     return total + cart.salePrice
                                 }, 0)}
                            </div>
                        </div>     
                        <div className="row">
                            <div className="col-6 h5">
                            Giam gia
                            </div>
                            <div className="col-6 text-right">
                                {cart.reduce((total, cart) => {
                                     return total + cart.retailPrice
                                 }, 0)}
                            </div>
                        </div>             
                       <div className="row p-2">
                       <div className="btn col-12 btn-primary "> Tiến Hành Đặt Hàng </div>    
                       </div>  
                    </CartFooter>
                </OrderCart>
            </OrderContent>
        </OrderWarpper>

    )
}
const Order = (props) => {
    const actionRef = useRef(null)
    const [isShowOrder, setShowOrder] = useState(false);
    return (
        <Fragment>
       
            <div role="link" ref={actionRef} onClick={() => { setShowOrder(!isShowOrder) }} style={{ position: "relative" }} className="cart-icon">
                <OrderNotification>{props.user !== undefined ? props.user.cart.length : undefined}</OrderNotification>
                <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-bag</title><path d="M3.371 22.498L4.733 7.499h3.064v1.706a1.5 1.5 0 1 0 2.253 1.293c0-.553-.304-1.032-.751-1.293V7.499h5.998v1.706a1.5 1.5 0 1 0 2.253 1.293c0-.553-.304-1.032-.751-1.293V7.499h3.065l1.362 14.999H3.371zM9.3 4.501a3.003 3.003 0 0 1 2.999-2.999 3 3 0 0 1 2.999 2.999v1.497H9.3V4.501zm11.935 1.497h-4.436V4.501A4.504 4.504 0 0 0 12.298 0a4.507 4.507 0 0 0-4.501 4.501v1.497H3.378L1.745 24h21.136L21.235 5.998z"></path></svg>
            </div>

            {ReactDOM.createPortal(<CheckOrder {...props} actionRef={actionRef} isShowOrder={isShowOrder} setShowOrder={setShowOrder} />, document.querySelector("#check"))}
        </Fragment>
    );
}
export default Order;