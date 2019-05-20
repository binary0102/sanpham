import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import product from '../image/product.jpg'
const CartTitle = styled.div`
display: flex;
flex-dirction: row;
justify-content: flex-between!important;
min-width:600px;
width:100%;

`
const Box = styled.div`
text-align: center;
border: solid 1px #ebebeb
padding: 9px 0px;
font-weight: 400;
color: #636363;
font-size: 14px;
width: ${props => props.witdh || null };
`
const CartBody = styled.div`
display: flex
flex-dirction: row;
align-items: center;
align-self:center;
`
const Card = styled.div`
border: solid 1px #ebebeb;
height: 135px;
display: flex
flex-dirction: row;
align-items: center;
align-self:center;
text-align: center;
justify-content: center;
color : ${props => props.color || null}
padding: ${props=> props.padding || null};
width: ${props => props.witdh || null };
`
const ButtonQuanlity = styled.div`
height:  30px;
width: ${props=> props.width || null};
line-height: 30px;
text-align: center;
vertical-align: top;
padding: 0;
background: #fff;
border: solid 1px #ebebeb;
`
const Total = styled.div`
border: solid 1px #ebebeb; 
text-align: center;
display: flex;
justify-content: flex-end;
padding: 20px;
`
export default function ShoppingCart(props) {
    const {user} = props.payload;
    console.log(user)
    return (
        <div className="container">  
            <h3  className="h3 my-5">
                Giỏ hàng
            </h3>
            <CartTitle>
                <Box witdh="17%"> Ảnh sản phẩm</Box>
                <Box witdh="33%"> Tên sản phẩm</Box>
                <Box witdh="15%"> Đơn giá</Box>
                <Box witdh="14%"> Số lượng</Box>
                <Box witdh="15%"> Thành tiền</Box>
                <Box witdh="6%"> Xoá</Box>
            </CartTitle>
           
                {user.cart.map( cart => {
                    return (
                    <CartBody>  
                        <Card padding= "10px" witdh="17%">
                         <Link> <img  class="mx-2" src={`images/w510/${cart.image}`}  style={{width:"75px",hight:"auto"}} /> </Link>
                        </Card>
                    <Card padding= "10px 0"  witdh="33%">{cart.title}</Card>
                    <Card padding= "10px" color="#16ACCF" witdh="15%">{cart.salePrice}</Card>
                    <Card padding= "10px"  witdh="14%"><ButtonQuanlity width="30px">
                            -
                        </ButtonQuanlity><ButtonQuanlity width="50px"> {cart.quanlity}</ButtonQuanlity><ButtonQuanlity  width="30px">+</ButtonQuanlity></Card>
                    <Card padding= "10px" color="#16ACCF"  witdh="15%">{cart.salePrice * cart.quanlity}</Card>
                    <Card padding= "10px"  witdh="6%">1</Card>
                    </CartBody>
                    )
                }
               )}
                
          
            <Total>
                Tổng tiền:
                <span style={{color:"#16ACCF"}} className="ml-4" >{totalPrice(user.cart)}</span>
            </Total>
            
            
        </div>
    )
}   

function totalPrice(carts) {
    console.log(carts)
    return carts.reduce((total, cart) => {
        return total+cart.salePrice;
    }, 0)
}