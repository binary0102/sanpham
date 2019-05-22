import React,{useState} from 'react';
import '../sass/ShowProduct.scss'
import Product from '../image/product3.jpg'
export default function ShowProduct(props) {
    const [isShow, setShow] = useState(false);
    
    let border_image = isShow ? "border-active-image" : "";
    function handleMouse(e) {
        console.log(e.currentTarget.offsetWidth);
        
        setShow(!isShow);
    }
    return <div className="container">
        <div className="product-container">
    
                <div className="row">
                    <div className="col-md-7">
                        <div className="image-slider-wrap d-flex">
                            <div className="slider-container d-flex mr-3">
                                   <div className="single-image-slider " onMouseMove={handleMouse} onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
                                        <img className={border_image} src={Product} />
                                   </div>
                                 
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>
        </div>
    </div>
}

function ListImage(props) {

}