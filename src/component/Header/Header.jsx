import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext, ProductContext } from '../App';

const Header = () => {
    // const products = useContext(ProductContext)
    // console.log(products);
    // const inArray = useContext(CartContext);
    // console.log(inArray);
    const [cart, setCart] = useContext(CartContext)
    console.log(cart.length);
    return (
        <div className=''>
            <div className="navbar bg-gray-900 text-white">
                <div className="flex-1">
                    <Link to="/" className=" text-xl rounded px-2 py-1 outline outline-[1px] hover:outline-2">Onuragi</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <Link to='/' className=' rounded px-2 py-1'>
                            Home
                        </Link>
                        <Link to='/shop' className=' rounded px-2 py-1'>
                            Shop
                        </Link>
                        <Link to='/cart' className='relative rounded px-2 py-1'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p className='text-sm absolute top-0 left-7 text-yellow-400'>{cart.length}</p>
                        </Link>
                        <Link to='/about' className=' rounded px-2 py-1'>
                            About
                        </Link>
                    </ul>
                </div>
            </div>
            <hr className='my-3 mx-2 h-[2px] border-0 bg-warning' />
        </div>
    );
};

export default Header;