import React,{useState,Fragment,useRef} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faTimes} from '@fortawesome/free-solid-svg-icons';

import Link from '../LinkRouter'
const CartWrapper = styled.div`
display: flex;
flex-direction: column;
marrgin: 0 1rem;
box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
border: 1px solid #e3e6f0;
border-radius: .35rem;
overflow: hidden;
background: #fff
`
const CartContainer = styled.div`

`
const CartContent = styled.div`

`
const CartHeader = styled.div`
`
const TableWarpper = styled.div``
const TableContainer = styled.div``
const TableHeaderRow = styled.div`
display: flex;
min-height: 64px;
align-items: center;
z-index: 100;
font-family: Muli,Helvetica Neue,Arial,sans-serif;
text-rendering: optimizeLegibility;

`
const TableHeaderCell = styled.div`
font-size: 14px;
font-weight: 600;
flex:${props => props.flex ? props.flex : "0 1 auto;"}
overflow: hidden;
`

const TableContent = styled.div`
display: flex;
flex-direction: column;
`
const TableContentRow = styled.div`
display: flex;
height: 84px;
align-items: center;
`
const TableContentCell = styled.div`
flex:${props => props.flex ? props.flex : "0 1 auto;"}
font-size: 14px;
font-weight: 600;
overflow: hidden;
`
const TextTrunCate = styled.div`
display: block;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`
const Quanlity = styled.span`
display: block;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
background-color: #f44336!important;
color: #fff!important;
display: inline-block;
vertical-align: middle;
width: 8px;
height: 8px;
border-radius: 4px;
margin-right: 8px;

`
const ActiveIcoin = styled.div`
background-color: ${props => props.backGround};
height: 20px;
width: 20px;
border-radus: 50%;
border-radius: 50%;
display: flex;
align-items: center;
    justify-content: center;
`
const Img = styled.img`
width: 52px;
height: 52px;
border: 1px solid rgba(0,0,0,.12);
`
export const TableHeaderProduct = () => {
    return (
        <TableHeaderRow>
        <TableContentCell  flex="0 1 84px" style={{paddingLeft: "24px"}}> a </TableContentCell>
        <TableContentCell  flex="0 1 84px"> ID  </TableContentCell>
        <TableContentCell  flex="0 1 84px"> image  </TableContentCell>
        <TableContentCell  flex="0 1 240px"> Name  </TableContentCell>
        
        <TableContentCell  flex="0 1 160px"> Category  </TableContentCell>
        <TableContentCell flex="0 1 160px"> Price  </TableContentCell>
        <TableContentCell flex="0 1 160px"> Quanlity  </TableContentCell>
        <TableContentCell flex="0 1 80px "> Active  </TableContentCell>
    </TableHeaderRow>
   
    )
}
export const TablePartHeader = () => {
    return (
     
        <TableHeaderRow>
        <TableContentCell  flex="0 1 84px"> STT  </TableContentCell>
          <TableContentCell  flex="0 1 84px"> Mã hàng hóa  </TableContentCell>
          <TableContentCell  flex="0 1 240px"> Tên hàng thành phần  </TableContentCell>
          
          <TableContentCell  flex="0 1 160px"> Số lượng  </TableContentCell>
          <TableContentCell flex="0 1 160px"> Giá vốn	  </TableContentCell>
          <TableContentCell flex="0 1 160px">Thành tiền</TableContentCell>
      </TableHeaderRow>
    )
}
export const TableContentProduct = (currentproducts) => {
    
    return (
        <Fragment>  
            {currentproducts.map((product,index) => {
             
                return (
                    <Link key={product._id} to={{pathname: "product/"+product._id, state:{product}}}>
                    <TableContentRow >
                    <TableContentCell  flex="0 1 84px" style={{paddingLeft: "24px"}}> a </TableContentCell>
                    <TableContentCell  flex="0 1 84px"> {index+1} </TableContentCell>
                    <TableContentCell  flex="0 1 84px">  <Img src={`${process.env.REACT_APP_PUBLIC_URL}/images/w510/${product.images[0]}`}/>   </TableContentCell>
                    <TableContentCell  flex="0 1 240px"> 
                        <TextTrunCate>{product.title}</TextTrunCate> 
                     </TableContentCell>
                    <TableContentCell  flex="0 1 160px"> 
                        <TextTrunCate>
                            {product.category}
                            </TextTrunCate>   </TableContentCell>
                    <TableContentCell flex="0 1 160px"> {product.salePrice}  </TableContentCell>
                    <TableContentCell flex="0 1 160px"> <Quanlity/> <span> {product.quantity}</span>  </TableContentCell>
                    <TableContentCell flex="0 1 80px "> <ActiveIcoin backGround="#366ff4"> <FontAwesomeIcon color="#fff" icon={faCheck} size="sm" /></ActiveIcoin>  </TableContentCell>
                    </TableContentRow>
                    </Link>
                )
            })}
       
        </Fragment>
    )
}
export const TablePart = (parts) => {
    return (
        <Fragment>  
            {parts !== undefined ?  <Fragment>  
            {parts.map((part,index) => {
                console.log(part)
                return (
                    <Link key={part._id} >
                    <TableContentRow >
                    <TableContentCell  flex="0 1 84px" style={{paddingLeft: "24px"}}>  {index+1} </TableContentCell>
                    <TableContentCell  flex="0 1 84px"> {part.code}</TableContentCell>
                  
                    <TableContentCell  flex="0 1 240px"> 
                        <TextTrunCate>{part.name}</TextTrunCate> 
                     </TableContentCell>
                     <TableContentCell  flex="0 1 240px"> 
                        <TextTrunCate>{part.quanlity}</TextTrunCate> 
                     </TableContentCell>
                    <TableContentCell  flex="0 1 84px"> {part.price}</TableContentCell>
                    <TableContentCell  flex="0 1 84px"> {part.price*part.quanlity}</TableContentCell>
                    </TableContentRow>
                    </Link>
                )
            })}
       
        </Fragment> : undefined}

    </Fragment>
    )
}
export const Table = ({Header,Content}) => {
    return (
        <div>
            <CartWrapper>
                <TableWarpper>
                    <TableContainer>
                        {Header()}
                        <TableContent>
                            {Content()}
                        </TableContent>
                        
                    </TableContainer>
                </TableWarpper>
            </CartWrapper>
        </div>
    )
}