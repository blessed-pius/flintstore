import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visual, setVisual] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Corrected: 'Location' should be 'location' and 'include' should be 'includes'
        if (location.pathname.includes('collection') && showSearch) {
            setVisual(true);
        } else {
            setVisual(false);
        }
    }, [location, showSearch]); // Added 'showSearch' to dependency array

    return showSearch && visual ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search' 
                />
                <img src={assets.search_icon} className='w-4' alt="search icon" />
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                src={assets.cross_icon} 
                className='inline w-3 cursor-pointer' 
                alt="close icon" 
            />
        </div>
    ) : null;
}

export default SearchBar;
