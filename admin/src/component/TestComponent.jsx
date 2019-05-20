import React,{useState,Fragment,useRef,useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faTimes} from '@fortawesome/free-solid-svg-icons';
import ImgProduct from '../image/logo.jpeg';
import {Table,TablePart,TablePartHeader} from './Table/Table';
import {DrapAndDrop} from './DragAndDrop';

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

export const TestComponent = ({Header}) => {
    return (
        <div>
            <CartWrapper>
                <TableWarpper>
                    <TableContainer>
                        <TableHeaderRow>
                            {Header()}
                        </TableHeaderRow>
                        <TableContent>
                            <TableContentRow>
                                <TableContentCell  flex="0 1 84px" style={{paddingLeft: "24px"}}> a </TableContentCell>
                                <TableContentCell  flex="0 1 84px"> 1  </TableContentCell>
                                <TableContentCell  flex="0 1 84px"> <Img src={ImgProduct}/>   </TableContentCell>
                                <TableContentCell  flex="0 1 240px"> 
                                    <TextTrunCate>A Walk Amongst Friends Canvas Print</TextTrunCate> 
                                 </TableContentCell>
                                <TableContentCell  flex="0 1 160px"> 
                                    <TextTrunCate>
                                        Canvas Print
                                        </TextTrunCate>   </TableContentCell>
                                <TableContentCell flex="0 1 160px"> $100  </TableContentCell>
                                <TableContentCell flex="0 1 160px"> <Quanlity/> <span> 3</span>  </TableContentCell>
                                <TableContentCell flex="0 1 80px "> <ActiveIcoin backGround="#f44336!important"> <FontAwesomeIcon color="#fff" icon={faTimes} size="sm" /></ActiveIcoin>  </TableContentCell>
                                </TableContentRow>
                                <TableContentRow>
                                <TableContentCell  flex="0 1 84px" style={{paddingLeft: "24px"}}> a </TableContentCell>
                                <TableContentCell  flex="0 1 84px">1</TableContentCell>
                                <TableContentCell  flex="0 1 84px"> <Img src={ImgProduct}/>   </TableContentCell>
                                <TableContentCell  flex="0 1 240px"> 
                                    <TextTrunCate>A Walk Amongst Friends Canvas Print</TextTrunCate> 
                                 </TableContentCell>
                                <TableContentCell  flex="0 1 160px"> 
                                    <TextTrunCate>
                                        Canvas Print
                                        </TextTrunCate>   </TableContentCell>
                                <TableContentCell flex="0 1 160px"> $100  </TableContentCell>
                                <TableContentCell flex="0 1 160px"> <Quanlity/> <span> 3</span>  </TableContentCell>
                                <TableContentCell flex="0 1 80px "> <ActiveIcoin backGround="#43a047!important"><FontAwesomeIcon color="#fff" icon={faCheck} size="sm" /></ActiveIcoin>  </TableContentCell>
                                </TableContentRow>
                        </TableContent>
                        
                    </TableContainer>
                </TableWarpper>
            </CartWrapper>
        </div>
    )
}
const TabsWarpper = styled.div`
padding: 1rem;

`
const TabWarpper = styled.div`
`
const TabsHeader = styled.div`
display: flex
position: relative;
`
const Tablabel = styled.div`
padding: 0 24px;
cursor: pointer;
box-sizing: border-box;
opacity: .6;
min-width: 160px;
text-align: center;
display: inline-flex;
justify-content: center;
align-items: center;
white-space: nowrap;
position: relative;
color: rgba(0,0,0,.87);
height: 64px;
font-size: 14px;
font-weight: 600;

@media (max-width: 599px){
    min-width: 81px;
    height: 48px;
}
`
const LabelLink = styled.div`
position: absolute;
bottom: 0;
height: 2px;
transition: .5s cubic-bezier(.35,0,.25,1);
visibility: visible;
width: 160px;
@media (max-width: 599px){
    width: 81px;
    left: ${props=> props.indexLabel > 0 ? (props.indexLabel*81)+'px' : '0px' };
}
left: ${props=> props.indexLabel > 0 ? (props.indexLabel*160)+'px' : '0px' };
background-color: #3c4252;
`

const FormControl = styled.div`
display: flex;
width: 100%;
margin-bottom: 24px;
`
const FromInput = styled.input`
width: 100%;
`
const FromInputLabel = styled.div`
width: 166px;
max-width: 166px;

color: #666;
padding-right: 24px;
display: flex;
justify-content: flex-start;
align-items: center;
position: relative;
min-height: 40px;
font-weight: 400;
white-space: nowrap;
`

export const ProductDetail = ({productGetSigle,updateRequest,uploadImage,partRequest,data,...props}) => {
    const [images, setImages] = useState([]);
    const [imageUpload, setImagesUpload] = useState([]);
    const  {productId }  = props.match.params;
    const {isFetching} = data;
    let {product,parts} = data.payload;
    const [currentProduct, setCurrentProduct] = useState({})
    
    useEffect(() => {
        productGetSigle(productId);
      
        setCurrentProduct(data.payload.product)
        
    },[])
    useEffect(() => {
        setCurrentProduct(data.payload.product)
        setImages(data.payload.product.images)
    },[product])
  

    const handleChangeUpload = (e) => {
   
        const arrayImages = Array.from(e.target.files);
        setImages([...images,...arrayImages]);
        setImagesUpload([...imageUpload,...arrayImages])
   
    }
    const handleRemoveImage = (img) => {
        if (!(img instanceof File)) {
       
            setCurrentProduct({...currentProduct, images:currentProduct.images.filter(image => image !== img)})
            
        }
        setImages(images.filter(image => image !== img));
        
    }
    const handeleUpdateProduct = () => {
        if (imageUpload.length > 0) {
           
            uploadImage(currentProduct._id, imageUpload)
        }
        updateRequest(currentProduct._id,currentProduct)
    }
    return (
        <div className="container">
        
    
         <CartWrapper>
            {isFetching ? undefined:    
         
       <Tabs>
             <TabWarpper label="Info">
          
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                     
                                <div className="form-group row ">
                                    <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Mã hàng hóa
                                    </label>
                                    <div className="col-sm-10"><input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" /></div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Tên hàng
                                    </label>
                                    
                                    <div className="col-sm-10"><input value={currentProduct.title || ''} onChange={(e) => { 

                                        setCurrentProduct({ ...currentProduct,title: e.target.value})}}  
                                        type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" /></div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Giá bán
                                    </label>
                                    <div className="col-sm-10"><input value={currentProduct.retailPrice || ''} onChange={(e) => { 
                                            setCurrentProduct({ ...currentProduct,retailPrice: e.target.value})}}       
                                    type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" /></div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Giá giảm giá  
                                    </label>
                                    <div className="col-sm-10"><input value={currentProduct.salePrice || ''} onChange={(e) => { 
                                            setCurrentProduct({ ...currentProduct,salePrice: e.target.value})}} 
                                     type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" /></div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Số lượng
                                    </label>
                                    <div className="col-sm-10"><input  value={currentProduct.quantity || '' } onChange={(e) => { 
                                            setCurrentProduct({ ...currentProduct,quantity: e.target.value})}}
                                     type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="" /></div>
                                </div>
                        </div>
                    </div>
                </div>
           
            
             </TabWarpper>
             <TabWarpper label="Produc Images">
                <ProductUploadImageWarpper>
                    <DrapAndDrop images={images} handleRemoveImage={handleRemoveImage} handleChangeUpload={handleChangeUpload} />
                </ProductUploadImageWarpper>
             </TabWarpper>
             <TabWarpper label="Part">
             <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                     
                               <Table Header={TablePartHeader} Content={()=>TablePart(parts)}>

                               </Table>
                        </div>
                    </div>
                </div>
             </TabWarpper>
           
       </Tabs> }    
     
                <CenterButton>
                    <div className="btn btn-success" onClick={handeleUpdateProduct}>
                           Save
                    </div>
                    <div className="mr-4"></div>
                    <div className="btn btn-primary" onClick={ ()=> props.history.goBack()}>
                           GoBack
                    </div>
                </CenterButton>
                </CartWrapper>
                </div>
              
     
    )
}
export const Tabs = ({children}) => {
    const [label, setLabel] = useState(children[0].props.label);
    const [indexLabel, setIndexLabel] = useState(0);

 
    return (
        <TabsWarpper>
                <TabsHeader>
                   
                    {children.map((element,index) => {
                        return (
                            <div key={`index+${index}`}>
                            <Tablabel activeLabel={element.props.label === label} onClick={(e) =>  {setIndexLabel(index); setLabel(element.props.label)}}>
                                {element.props.label}
                            </Tablabel>
                          
                            </div   >
                        )  
                    })}
                        <LabelLink indexLabel={indexLabel} />


                </TabsHeader>
                {children.map(element => {
                   return  element.props.label === label ?  element.props.children : undefined
                })}
               
        </TabsWarpper>
    )
}

const CenterButton = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 1rem 1rem; 
`
const ProductUploadImageWarpper = styled.div`

`

const PartView = ({partRequest}) => {
    useEffect( () => {
        
    })
    return (
        <div>

        </div>
    )
}