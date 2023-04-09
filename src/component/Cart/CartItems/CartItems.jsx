import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faRemove,faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons'

const CartItems = ({ pItem,handleRemoveCart }) => {
    const { img, name, quantity, price, id } = pItem;
    
    // console.log(pItem);

    return (
        <div className='border border-gray-300 p-2 rounded flex justify-between bg-gray-200'>
            <div className='flex items-center'>
                <div className='bg-gray-200 rounded-md border m-2'>
                    <img className='w-20' src={img} alt="Baby dress" />
                </div>
                <div className='relative p-2'>
                    <h3 className='font-semibold'>{name}</h3>
                    <p className='text-gray-500'><small>Quantity: {quantity}</small></p>
                    <div className='top-0'>
                        <button onClick={()=>handleRemoveCart(id)} className='text-gray-500 text-sm'>
                            <span className='mr-1'><FontAwesomeIcon icon={faRemove} size="sm" /></span>
                            Remove
                        </button>
                    </div>
                </div>

            </div>
            <div className='text-end'>
                <h3 className='font-bold'>
                    {price}
                    <span className='text-sm text-gray-700 ml-1'><FontAwesomeIcon icon={faBangladeshiTakaSign} size="sm" /></span>
                </h3>
                <p className='text-sm text-gray-600'>
                    Total: {price * quantity}
                    <span className='text-sm text-gray-700 ml-1'><FontAwesomeIcon icon={faBangladeshiTakaSign} size="sm" /></span>
                </p>
            </div>

        </div>
    );
};

export default CartItems;