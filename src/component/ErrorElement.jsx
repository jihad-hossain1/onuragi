import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='text-center mt-44'>
            <h3 className='text-4xl '>404</h3>
            <p>Page note Found</p>
            <div>
                <Link to='/'><button className='border py-1 px-2 bg-primary rounded-md hover:text-blue-500 hover:underline'>Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;