import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBangladeshiTakaSign, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const SingelCard = ({product,handleAddToCart}) => {
    
    const {name, img, price, stock , id} = product
    return (
        <div>
            <div className='rounded-md border border-yellow-300 px-2'>
            <div className='m-1 bg-gray-200 rounded'>
                <img className='object-cover rounded-md' src={img} alt="" />
            </div>
            <h2 className='font-semibold'>{name}</h2>
                <p>
                    Price: <FontAwesomeIcon icon={faBangladeshiTakaSign} size="sm" />
                    <span className='ml-1'>{price}</span>
                </p>
                <p><small>
                    stock: {stock}
                </small></p>
        </div>
            <button onClick={()=>handleAddToCart(id)} className='w-full py-2 bg-yellow-300 hover:bg-yellow-500 rounded-b-md'>
                add to cart
                <span className='ml-3'><FontAwesomeIcon icon={faCartShopping} size="sm" /></span>
            </button>
        </div>
    );
};

export default SingelCard;