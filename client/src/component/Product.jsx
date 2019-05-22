import React,{useState, useEffect} from 'react';
import {numberFormat} from '../helper/user';

import Logo from '../image/logo.jpg';
import styled from "styled-components";

import CartProduct from '../component/CartProduct';
const Title = styled.div`
color: rgb(68, 68, 68);
 text-align: center;
  font-weight: bold; 
  font-style: normal;
   font-size: 1.5rem;
   line-height: 2rem;
   padding: 10px 20px 20px 20px;
`
const ImageProduct = styled.img`
   width: 100%;
   heigth: 100%;
   border-width: 3px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    transition: all 0.25s ease 0s;
`
const InfoTitle = styled.div`
font-size: 1.25rem;
color: #4E595D;
font-weight: 400;
font-family: inherit;
line-height: 1.5rem;
letter-spacing: -.5px;
margin-bottom: .5rem;
`
const InfoPriceRetail = styled.span`
text-decoration: line-through;
font-size: 1.25rem;
padding-right: 8px;
color: rgba(78,89,93,0.7);
`
const InfoPriceSale = styled.span`
color: #16ACCF;
font-weight: 700;
font-size: 1.5rem !important
line-height: 1.63rem !important;
`
const ProductDescription = styled.div`
margin-top: 20px;
`
var product = [{ "name": "", "images": ["5bdc1797f92629517f3b4a85.jpg", "5bdc1797092f40596f5736de.jpg", "5bdc17a1092f40bd305736df.jpg"], "title": "Vòng Tay Thạch Anh Tóc Xanh Charm Sao Biển", "retailPrice": 1440000, "salePrice": 799000, "quantity": 5, "_id": "5cb14fe5f5844e3899289ca0", "description": { "heading": "Phá vỡ mọi giới hạn", "secondary": [{ "header": "Gia công:", "data": ["Việt Nam"] }, { "header": "Công dụng:", "data": ["Năng lượng hài hòa của đá thạch anh xanh giúp cho tâm trí bạn dễ dàng được khơi thông, giúp suy nghĩ tích cực hơn, vui vẻ và lạc quan hơn. ", "Làm hài hòa và bền chặt thêm các mối quan hệ mà bạn đang có.", "Ngoài ra, viên đá này còn có khả năng hấp thụ bức xạ tia cực tím rất mạnh, do vậy có thể bảo vệ da tránh khỏi bức xạ do tia cực tím gây ra. Có khả năng làm chậm quá trình lão hoá, kích hoạt hoạt động của hệ miễn dịch cũng như giúp cơ thể nhanh hồi phục sau xạ trị. Giúp khắc phục tình trạng mệt mỏi và trầm uất."] }, { "header": "Bảo hành: Bảo hành vĩnh viễn", "data": ["Trung tâm bảo hành: 18/2 đường số 50, Hiệp Bình Chánh, Q. Thủ Đức. Điện thoại: 0905152891"] }], "materialCare": [{ "header": null, "data": ["Chất liệu: thạch anh tóc xanh, bạc"] }, { "header": null, "data": ["Bảo quản: Tránh tiếp xúc với chất tẩy rửa, nhiệt độ cao, vệ sinh bằng khăn vải mềm."] }], "sizeFit": [{ "header": null, "data": ["Đường kính: 5cm"] }, { "header": null, "data": ["Đá: 1cm"] }] } }];
var product1 = {quantity: 5,retailPrice: 1440000,salePrice: 799000,
    title: "Vòng Tay Thạch Anh Tóc Xanh Charm Sao Biển",
    _id: "5cb14fe5f5844e3899289ca0", image2: "5bdc1797f92629517f3b4a85.jpg", image: "5bdc17a1092f40bd305736df.jpg"};

export default function Product(props) {
    console.log(props);
    const { slug } = props.match.params;
    const {product  , description ,isFetching} = props.payload;
    const { request} = props;
    const {cartRequest} = props;
    if (localStorage.getItem("product")) {

    }
    useEffect(() => {
        request(slug);
    },[slug]) 
    const [img, setImg] = useState("");
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="d-flex flex-column col-md-2">
                            {product.images.map(image => (
                                <div className="mb-3"  >
                                    <ImageProduct src={ process.env.PUBLIC_URL +'/images/w380/'+image}  onMouseEnter={e=> { setImg(e.currentTarget.src);  console.log(e.currentTarget.src)}}/>
                                </div>
                            ))}
                           
                          
                        </div>
                        <div className="col-md-10">
                            <div>
                                {img === "" ? <ImageProduct src={process.env.PUBLIC_URL +'/images/w1030/'+product.images[0]} />: <img src={img} style={{ width: "100%", height: "20%" }} />}
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <img src={Logo}>
                                </img>
                            </div>
                            <div>
                                <h3 className="h5 my-4"> "Phá vỡ mọi giới hạn"</h3>
                                <div>
                                Thương hiệu trang sức thiết kế của Việt Nam với sự giản đơn phảng phất nét cổ điển. Udumbara - với ý nghĩa hoa Ưu Đàm mang đến sự tinh khiết, ngọt ngào và nuôi dưỡng năng lượng may mắn, yêu thương cho người sử dụng nó.
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    <div className="product-info">
                        <InfoTitle> {product.title} </InfoTitle>
                        <div>
                            <InfoPriceRetail> {numberFormat(product.retailPrice.toString(),'.')}₫</InfoPriceRetail>
                            <InfoPriceSale> {numberFormat(product.salePrice.toString(),'.')}₫</InfoPriceSale>
                        </div>

                        <div className="my-3">
                            <button className="btn btn-primary" onClick={() => cartRequest(product._id,1)} style={{ width: "90%" }}>Thêm vào giỏ hàng </button>
                        </div>
                        <div className="mt-4">
                            <div className="mb-3 d-flex">
                                <div className="mr-2"> <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-guarantee</title><path d="M20.473 6.262c0-.782-.47-1.31-1.26-1.41-.15-.021-.304-.037-.453-.054-.445-.054-.865-.1-1.268-.187-1.576-.345-3.102-1.056-4.79-2.237-.279-.195-.586-.374-.948-.374-.358 0-.665.179-.944.37-2.258 1.551-4.291 2.341-6.395 2.474-.911.058-1.389.574-1.389 1.493v1.655c-.004 1.526-.004 3.102.012 4.657.004.578.079 1.177.216 1.784.324 1.422 1.064 2.703 2.262 3.913 1.493 1.509 3.364 2.674 5.717 3.559.158.058.328.091.507.091.216 0 .432-.046.624-.129.129-.058.262-.112.391-.166l.012-.004c.57-.245 1.156-.499 1.73-.798 1.913-1.01 3.36-2.204 4.424-3.651.956-1.297 1.451-2.603 1.509-3.992.012-.266.021-.549.025-.869l.021-2.57V8.773c0-.84 0-1.676-.004-2.511zm-.998 3.505v.029l-.021 2.578a37.2 37.2 0 0 1-.021.836c-.05 1.185-.482 2.312-1.318 3.443-.973 1.322-2.312 2.42-4.087 3.36-.536.283-1.106.528-1.659.765l-.012.004-.395.17a.576.576 0 0 1-.225.046.46.46 0 0 1-.158-.025c-2.216-.836-3.971-1.925-5.36-3.326-1.056-1.077-1.709-2.2-1.992-3.435a7.18 7.18 0 0 1-.191-1.572c-.017-1.547-.012-3.123-.012-4.644V6.341c0-.191.029-.333.087-.391.054-.058.183-.096.37-.108 2.291-.15 4.482-.99 6.894-2.653.187-.129.312-.191.378-.191s.191.067.378.195c1.8 1.256 3.439 2.017 5.148 2.391.449.1.894.15 1.368.204.15.017.295.033.445.054.291.037.387.141.387.42v2.507l-.004.998zM12.024 14l-2.351 1.236.449-2.618-1.902-1.854 2.629-.382L12.025 8l1.176 2.382 2.629.382-1.902 1.854.449 2.618L12.026 14z"></path></svg></div>
                                Cam kết 100% chính hãng
                        </div>
                            <div className="mb-3 d-flex" >
                                <div className="mr-2"><svg width="24" height="24" viewBox="0 0 24 24"><title>ic-ship</title><path d="M20.911 8.159c-.666-.721-1.613-1.115-2.665-1.115h-2.745V4.999H2v12.064h2.506c.163.93.972 1.638 1.948 1.638s1.785-.708 1.948-1.638h7.697c.163.93.972 1.638 1.948 1.638s1.785-.708 1.948-1.638h2.002l.001-5.699c-.004-1.328-.377-2.439-1.089-3.206zM3.006 6.006h11.49v10.057H8.315c-.272-.763-1.006-1.312-1.86-1.312s-1.588.549-1.86 1.312H3.007V6.006zm3.448 11.69a.973.973 0 0 1 0-1.944.973.973 0 0 1 0 1.944zm11.595 0a.973.973 0 0 1 0-1.944.973.973 0 0 1 0 1.944zm2.941-1.638h-1.081c-.272-.763-1.006-1.312-1.86-1.312s-1.588.549-1.86 1.312h-.683V8.05h2.745c1.693 0 2.745 1.27 2.745 3.314v4.693h-.004z"></path></svg></div>
                                Giao hàng dự kiến: 4 ngày
                        </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-2"><svg width="24" height="24" viewBox="0 0 24 24"><title>ic-return</title><path d="M18.509 4.46a9.979 9.979 0 0 1 3.295 6.069l-1.165.17a8.795 8.795 0 0 0-2.904-5.347 8.699 8.699 0 0 0-5.738-2.162 8.742 8.742 0 0 0-7.724 4.682l1.088.342-2.589 2.4-.773-3.455 1.132.356a9.92 9.92 0 0 1 8.865-5.508c2.396 0 4.708.871 6.512 2.454zm3.485 12.334l-1.132-.355a9.92 9.92 0 0 1-8.865 5.508 9.864 9.864 0 0 1-6.511-2.454 9.985 9.985 0 0 1-3.296-6.069l1.165-.17a8.795 8.795 0 0 0 2.904 5.347 8.699 8.699 0 0 0 5.738 2.162 8.742 8.742 0 0 0 7.724-4.682l-1.088-.342 2.589-2.4.773 3.455z"></path></svg></div>
                                Đổi trả trong 2 ngày
                        </div>
                        </div>
                        <ProductDescription>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between">
                                    <div className="h6 text-uppercase font-weight-bold"> Thông tin sản phẩm </div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-minus</title><path d="M5 11h15v1H5v-1z"></path></svg>
                                </div>
                                <div className="mt-2">
                                    <ul className="pl-4">
                                        <li>Sản phẩm: Vòng Tay Thạch Anh Tóc Xanh Charm Sao Biển</li>
                                        {description.secondary.map(element => (
                                            <li>
                                                <div> {element.header} </div>
                                                <ul>
                                                    {element.data.map(data => (
                                                         element.header === null ? <div>{data}</div> : <li>{data}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between">
                                    <div className="h6 text-uppercase font-weight-bold"> Chất liệu & Cách sử dụng </div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-minus</title><path d="M5 11h15v1H5v-1z"></path></svg>
                                </div>
                                <div className="mt-2">
                                    <ul className="pl-4">
                                        {description.materialCare.map(element => (
                                            <li>
                                                <div> {element.header} </div>
                                                <ul>
                                                    {element.data.map(data => (
                                                        element.header === null ? <div>{data}</div> : <li>{data}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between">
                                    <div className="h6 text-uppercase font-weight-bold"> Chi tiết kích cỡ</div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"><title>ic-minus</title><path d="M5 11h15v1H5v-1z"></path></svg>
                                </div>

                                <div className="mt-2">
                                    <ul className="pl-4">
                                        {description.sizeFit.map(element => (
                                            <li>
                                                <div> {element.header} </div>
                                                <ul>
                                                    {element.data.map(data => (
                                                         element.header === null ? <div>{data}</div> : <li>{data}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                        </ProductDescription>
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