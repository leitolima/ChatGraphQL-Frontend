import React, { useContext } from 'react';
import UserContext from '../../context/userContext';

const Header = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    return (
        <header className="py-3 px-5 bg-white border border-gray-300">
            <h1 className="text-3xl tracking-normal font-bold text-gray-700">
                {channel && channel.name}
                <i className="far fa-star text-gray-700 ml-2 cursor-pointer"></i>
            </h1>
            <p className="text-gray-500">{channel && channel.members ? channel.members.length : '0'} users</p>
        </header>
    )
}

export default Header;