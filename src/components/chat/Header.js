import React, { useContext } from 'react';
import UserContext from '../../context/userContext';

const Header = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    return (
        <header className="py-3 px-5 bg-dark-area rounded-t-lg">
            <h1 className="text-xl lg:text-3xl tracking-normal font-bold text-gray">
                {channel && channel.name}
                <i className="far fa-star text-gray ml-2 cursor-pointer"></i>
            </h1>
            <p className="subtext-gray">{channel && channel.members ? channel.members.length : '0'} users</p>
        </header>
    )
}

export default Header;