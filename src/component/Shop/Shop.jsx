import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelCard from './SingelCard';
import { addToDatabase } from '../db/db';
import { ProductContext } from '../App';

const Shop = () => {
    // const {products} = useLoaderData()
    // console.log(products,inArray);
    // 
    const products = useContext(ProductContext)
    // console.log(products);
    const handleAddToCart = id => {
        addToDatabase(id);
    }
    return (
        <div className='min-h-screen grid md:grid-cols-3 lg:grid-cols-4 gap-2 mx-4 md:mx-10 lg:mx-40'>
            {
                products.map((product) => <SingelCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></SingelCard>)
            }
        </div>
    );
};

export default Shop;