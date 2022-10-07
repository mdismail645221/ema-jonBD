import React, { useEffect, useState } from 'react';
import { addToDb, getStoredDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {useLoaderData} from 'react-router-dom'


const Shop = () => {

    const products = useLoaderData()
    // console.log(products)

    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        const storedCart = getStoredDb();
        let udDatedCart = [];
        for (const storedId in storedCart) {
            const matchProduct = products.find(product => product.id === storedId);
            
            if (matchProduct) {
                const quantity = storedCart[storedId];
                matchProduct.quantity = quantity;
                udDatedCart.push(matchProduct);
            }
        }
        setCart(udDatedCart)
    }, [products]);
    

    

    const ClickBtnHandler = (selectedProduct) => {
        // console.log(selectedProduct)
        // console.log(cart)
        let newCart = [];
        const exits = cart.find(product => product.id === selectedProduct.id);
        if (!exits) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        ClickBtnHandler={ClickBtnHandler}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;