import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = ({ product, deletedHandleCart }) => {
    // console.log(product)
    const { name, price, quantity,img, shipping, id} = product;
    return (
        <div className='review-container flex items-center w-4/5 mx-auto my-5 rounded-lg shadow-lg'>
            <div className='mr-5'>
                <img src={img} alt="img" />
            </div>
            <div className='review-info flex items-center justify-between w-full p-3'>
                <div>
                    <h2 className='text-lg'>{name}</h2>
                    <p><strong>Price</strong>:${price}</p>
                    <p><strong>Quantity</strong>: { quantity}</p>
                    <p><strong>Shipping Carge: $</strong> { shipping}</p>
                </div>
                <div className='btn-deleted'>
                    <button onClick={()=> deletedHandleCart(id)} className='border px-8 py-3 rounded-full bg-red-200 hover:bg-red-300 hover:font-bold '>
                        <FontAwesomeIcon className="text-red-600 text-2xl" icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewInfo;