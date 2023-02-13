import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useSelector } from "react-redux";
const Home = () => {
    const [products, setProducts] = useState([]);
    fetch("products.json").then((res) => res.json()).then((data) => setProducts(data));

    const state = useSelector((state) => state);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                products.map((product) => <ProductCard key={product._id} product={product} />)
            }
        </div>
    );
};

export default Home;