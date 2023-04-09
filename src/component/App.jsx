import React, { createContext, useState } from 'react';
import Header from './Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer/Footer';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
    const { inArray, products } = useLoaderData()
    const [cart, setCart] = useState(inArray)
    // console.log(products);
    return (
        <CartContext.Provider value={[cart, setCart]}>
            <ProductContext.Provider value={products}>
            <Header></Header>
            <div className='min-h-fit'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </ProductContext.Provider>
        </CartContext.Provider>
    );
};

export default App;