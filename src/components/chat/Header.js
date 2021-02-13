import React, { useContext, useState } from 'react';
import UserContext from '../../context/userContext';
//Components
import Invite from '../modals/Invite';

const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const context = useContext(UserContext);
    const { channel, channel: { id } } = context;

    return (
        <>
            <header className="py-3 px-5 bg-dark-area rounded-t-lg">
                <h1 className="text-xl lg:text-3xl tracking-normal font-bold text-gray">
                    {channel && channel.name}
                    <i className="far fa-star text-gray ml-2 cursor-pointer"></i>
                </h1>
                <p className="subtext-gray">
                    <span>{channel && channel.members ? channel.members.length : '0'} users - </span>
                    <span onClick={openModal} className="text-lightblue font-semibold cursor-pointer">Invite a friend</span>
                </p>
            </header>
            {showModal && <Invite show={showModal} closeModal={closeModal} channelId={id}/>}
        </>
    )
}

export default Header;