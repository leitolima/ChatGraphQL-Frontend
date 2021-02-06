import React from 'react';

const Header = () => {
    return (
        <header className="py-3 px-5 bg-white border border-gray-300">
            <h1 className="text-3xl tracking-normal font-bold text-gray-700">
                #JavaScript
                <i className="fas fa-star text-yellow-300 ml-2"></i>
            </h1>
            <p className="text-gray-500">3 users</p>
        </header>
    )
}

export default Header;