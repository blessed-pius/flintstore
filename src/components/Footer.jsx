import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <h4 onClick={() => navigate('/')} className=' cursor-pointer text-black text-[26px] font-[600] mb-5 '>LOGO</h4>
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Explore our diverse selection of top-quality products designed to meet your every need. We are committed to offering exceptional service and unparalleled value. From the latest trends to timeless classics, we ensure that every item we offer upholds our high standards of excellence. Join our community to stay updated on new arrivals, special promotions, and more. Your satisfaction is our priority, and we look forward to serving you.
                    </p>
                </div>
                <div >
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+2349102449764</li>
                        <li>danieldaudu65@gmail.com</li>
                    </ul>
                </div>

            </div>

            <div >
                <hr />
                <p className='py-5 text-sm text-center'> Copyright 2024 by Daniel Success - all right Reserve</p>
            </div>
        </div>
    );
}

export default Footer;
