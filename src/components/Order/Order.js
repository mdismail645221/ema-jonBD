import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Order.css'

const Order = () => {
    const { products, storedCart } = useLoaderData();
    // console.log(storedCart)
    const [cart, setCart] = useState(storedCart);

    const deletedHandleCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }  

    return (
        <div className='mt-28'>
            <div className='shop-container'>
                <div className='products-container'>
                    <div className='orders-container'>
                         {
                        cart.map(product => <ReviewInfo
                            key={product.id}
                            product={product}
                            deletedHandleCart={deletedHandleCart}
                        ></ReviewInfo>)
                        }
                   </div>
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;