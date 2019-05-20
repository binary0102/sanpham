import CartProduct from './CartProduct'
import React from 'react';
import Link from './LinkRouter';
export const ListItems  = (props) => { 
    const {product} = props;
 
    return ( 
   
     <div className="col-6 col-md-6 col-lg-4 mb-4">
        <div className="product-card d-flex flex-column">
        <Link to={`/product/${product.slug}`}>
           <CartProduct product = {{ 
                image: product.image, image2: product.image2, discount:product.discount, title:product.title ,
                retailPrice:product.retailPrice  ,salePrice:product.salePrice
                }}/>   
       </Link>
        </div>
    </div>
 
    )
}