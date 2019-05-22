import styled from "styled-components";
import React,{useEffect} from 'react';
import Sider from '../image/slider_1.png';
import CartProduct from './CartProduct';
import Banner from '../image/banner.png';
import Banner2 from '../image/banner2.png';
import Banner3 from '../image/banner3.png';
import Banner4 from '../image/banner4.png';
const TitleMenu = styled.div`
margin: 0;
padding: 10px 28px 10px 28px;
font-size: 24px;
line-height: 24px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
font-family: 'UTM';
font-weight: 400;
background: #0ec0e8;
text-transform: uppercase;
display: inline-block;
color: #fff;
`;
const Title = styled.div`
color: rgb(68, 68, 68);
 text-align: center;
  font-weight: bold; 
  font-style: normal;
   font-size: 15px;
   padding: 10px 20px 20px 20px;
`
var product1 = {quantity: 5,retailPrice: 1440000,salePrice: 799000,
    title: "Vòng Tay Thạch Anh Tóc Xanh Charm Sao Biển",
    _id: "5cb14fe5f5844e3899289ca0", image2: "5bdc1797f92629517f3b4a85.jpg", image: "5bdc17a1092f40bd305736df.jpg"};

export default function Home({requestCategory,payload,...props}) {
    console.log(payload.payload[0].product)
    useEffect( () => {
   requestCategory("vong-tay")

    },[])
    return (
        <div className="container">
            <div >
                <img className="w-100 h-100" src={Sider} />

            </div>
            <div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <TitleMenu>
                            Udumbara
                         </TitleMenu>
                    </div>
                    <div className="col-lg-12">
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-lg-3 hidden-md">
                                    <img className="w-100 " src={Banner} />
                                    <img className="w-100 mt-2" src={Banner2} />
                                </div>
                                <div className="col-lg-9">
                                    <div className="row">
                                       {payload.payload[0].product.map((product,index) => {
                                         return   index < 8 ? <div className="col-lg-3 col-md-3 mb-4">
                                            <CartProduct product={product}/>
                                        </div> : undefined
                                        })}
                                        
                                       
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <TitleMenu>
                            Udumbara
                         </TitleMenu>
                    </div>
                    <div className="col-lg-12">
                        <div className="mt-3">
                            <div className="row">

                                <div className="col-lg-9">
                                    <div className="row">
                                   {payload.payload[0].product.map((product,index) => {
                                         return   index > 8  && index < 17? <div className="col-lg-3 col-md-3 mb-4">
                                            <CartProduct product={product}/>
                                        </div> : undefined
                                        })}
                                       
                                     
                                    </div>
                                </div>
                                <div className="col-lg-3 hidden-md">
                                    <img className="w-100 " src={Banner3} />
                                    <img className="w-100 mt-2" src={Banner4} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div >
                    <Title> SẢN PHẨM ĐÃ XEM </Title>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="row" style={{width: "13rem" , flexWrap: "nowrap"}}>
                    {localStorage.getItem("product") !== null ?
                        JSON.parse(localStorage.getItem("product")).map(product => {
                              return (
                                <div className="col">
                                <CartProduct product={product}/>
                              </div> )}): undefined
                              
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    )
}