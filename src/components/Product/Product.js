import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {ClickBtnHandler, product} = props
    const {img, name, seller, ratings, price,} = product;





    return (
        <div className='product'>
            <div>
                <img src={product?product.img : 'Nfound'} alt="" />
                <div className='product-info'>
                    <h2 className='text-2xl font-semibold'>{ name}</h2>
                    <h3 className='text-lg font-semibold'>Price:{price}</h3>
                    <p>Seller: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button onClick={() => ClickBtnHandler(product)} className='btn-box'>
                    Add To Cart
                    <FontAwesomeIcon className='text-red-400' icon="fa-solid fa-cart-arrow-down" />
                </button>
            </div>
        </div>
    );
};

export default Product;