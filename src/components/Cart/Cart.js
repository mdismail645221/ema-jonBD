import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const pd of cart) {
        // console.log(pd);
        quantity = quantity + pd.quantity;
        total = total + pd.price * pd.quantity;
        shipping = shipping + pd.shipping * pd.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax);
    
    
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Order List:{quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {shipping} </p>
            <p>Tax: {tax}</p>
            <h4>Grand Total:{grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;