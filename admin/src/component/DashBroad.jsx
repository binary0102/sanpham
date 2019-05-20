import React, { useEffect, useState } from 'react';
import Modal from './Modal'

import { Pagination } from './Pagination';
import ModalFooterProduct from '../container/FooterModal'
import { ModalContentProduct } from './Modal/FooterModal';
import {Table,TableHeaderProduct,TableContentProduct} from './Table/Table';
import {ProductDetail} from './TestComponent'

const HeadProduct = ["Mã hàng hóa", "Tên hàng", "Giá bán", "Tồn kho"];
export default function DashBroad(props) {
    const [showModal, setModal] = useState(false);
    const [currentproducts, setProducts] = useState([]);
    const [currentPages, setCurrentPage] = useState(null);
    const [currentProduct, setProduct] = useState({});
    const { productRequest } = props;
    const { product } = props.product.payload;
    const { isFetching } = props.product;
   

    useEffect(() => {
        productRequest();
      
    }, [])
    useEffect(() => {
        const current_product = () => {
            let offset = (currentPages - 1) * 10;
            console.log(props);
            console.log(product);
            let temp = product.slice(offset, offset + 10);
   
            setProducts(temp);
        }
        current_product();

    }, [currentPages])
    useEffect(() => {
        const current_product = () => {
            let offset = (currentPages - 1) * 10;
            let temp = product.slice(offset, offset + 10);
            setProducts(temp);
        }
        current_product();
        return () => { current_product() }
    }, [product])
    function onPageChanged(data) {
        setCurrentPage(data);
    }

    return (


        <div>
         
 
            {isFetching ? undefined :
                <div className="container">
                {console.log(currentproducts)}
                    <Table Header={TableHeaderProduct} Content={() =>  TableContentProduct(currentproducts)}>
                      
                    </Table>

                     <Pagination totalRecords={product.length} pageLimits={10} pageNeighbours={2} onPageChanged={onPageChanged} /> 
                </div>
            }
        </div>
    )
}

