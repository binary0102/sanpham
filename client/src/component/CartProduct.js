import React, { Fragment } from 'react';
import styled from "styled-components";
import {numberFormat} from '../helper/user'
import Link from './LinkRouter'
import {Redirect} from 'react-router'
import {withRouter} from 'react-router-dom'
const DiscountProduct = styled.div`
position: absolute;
left: 0px;
bottom: 0px;
font-size: 12px;
color: rgb(255, 255, 255);
background-color: rgb(220, 36, 52);
border-top-right-radius: 5px;
font-weight: 500;
z-index: 3;
text-transform: uppercase;
padding: 2px 8px;
`;
const ProductImage = styled.div`
    position: relative
`;
const ProductTitle = styled.div`
color: rgb(78, 89, 93);
font-size: 0.875rem;
margin-bottom: 2px;
letter-spacing: 0px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`
const PriceRetail = styled.span`
color: rgba(78, 89, 93, 0.7);
font-weight: 400;
font-size: 1rem;
line-height: 1.63rem;
margin-right: 0.5rem;
text-decoration: line-through;`
const PriceSale = styled.span`
color: rgb(22, 172, 207);
font-weight: 700;
font-size: 1.125rem;
line-height: 1.33rem;
letter-spacing: -0.03125px;
`
const ProductInfo = styled.span`
margin-top: 15px;
`
const ImageShow = styled.div`
background-position: center center;

background-size: cover;`;
function CartProduct(props) {

    const { image, image2, discount, title ,retailPrice  ,salePrice,slug} = props.product;

    return (
        <Link to={`/product/${slug}`}>
            <ProductImage>
                <ImageShow> <img class="w-100 h-100" onMouseLeave={e => (e.currentTarget.src = process.env.PUBLIC_URL +'/images/w260/' + image)} onMouseEnter={e => (e.currentTarget.src = process.env.PUBLIC_URL +'/images/w260/' + image2)} src={process.env.PUBLIC_URL +'/images/w260/' + image} /></ImageShow>
                <DiscountProduct>
                    40% OFF
                </DiscountProduct>
            </ProductImage>
            <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <div className="">
                    <PriceRetail>{numberFormat(retailPrice.toString(),'.')}₫</PriceRetail>
                    <PriceSale >{numberFormat(salePrice.toString(), '.')}₫</PriceSale>
                </div>
            </ProductInfo>
        </Link>
    )
}
export default withRouter(CartProduct)