import React, { createContext } from 'react';
import Header from './Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer/Footer';

const ProductContext = createContext([]);
const CartContext = createContext([]);

const App = () => {
    const { inArray, products } = useLoaderData()
    console.log(products);
    return (
        <ProductContext.Provider value={products}>
            <Header></Header>
            <div className='min-h-fit'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </ProductContext.Provider>
    );
};

export default App;