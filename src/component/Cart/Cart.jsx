import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItems from './CartItems/CartItems';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons'
import { deleteShopingCart, removeFromDB } from '../db/db';

const Cart = () => {
    const { inArray } = useLoaderData();
    // console.log(inArray);
    let total = 0;
    if (inArray.length > 0) {
        for (const product of inArray) {
            total = total + product.price * product.quantity
        }
    }

    //products remove form database
    const handleRemoveCart = id => {
        removeFromDB(id)
    }
    // delete shoping cart
    const deleteCartHandle = () => {
        deleteShopingCart()
    }
    return (
        <div className='min-h-screen flex justify-center '>
            
            <div className=''>
                <h2 className='text-2xl font-semibold py-2 px-1'>{inArray.length ? 'Review Cart Items' : 'Cart is Empty'}</h2>
                <ul className='flex flex-col gap-1'>
                    {
                inArray.map(pItem => <CartItems
                    key={pItem.id}
                    pItem={pItem}
                    handleRemoveCart={handleRemoveCart}

                ></CartItems>)}
                </ul>
                <div className='space-y-1 text-right mt-2'>
                    <p>
                        Total amount: <span className='font-semibold'>
                            {total}
                            <span className='ml-1'><FontAwesomeIcon icon={faBangladeshiTakaSign} size="sm" /></span>
                        </span>
                    </p>
                    <p className='text-gray-400 '><small>Not including taxes and shipping costs</small></p>
                </div>
                <div className='flex justify-end space-x-4 mt-2'>
                    {
                        inArray.length > 0 ? <button onClick={deleteCartHandle} className='btn-outline btn-warning rounded-md px-1'>
                        Clear Cart
                    </button> : <Link to='/shop'><button className='btn-outline btn-warning rounded-md px-1'>
                        Back to Shop
                    </button></Link>
                    }
                    <button className='btn-outline bg-yellow-500 border border-gray-400 rounded-md px-2'>
                        Place Order
                    </button>
                </div>
            </div>
           
        </div>
    );
};

export default Cart;