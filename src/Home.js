import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    fetch("products.json").then((res) => res.json()).then((data) => setProducts(data))
    return (
        <div>
            {
                products.map((product) => <ProductCard key={product._id} product={product} />)
            }
        </div>
    );
};

export default Home;