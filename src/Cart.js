import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div>
            {
                cart.map(product => <ProductCard product={product} ></ProductCard>)
            }
        </div>
    );
};

export default Cart;