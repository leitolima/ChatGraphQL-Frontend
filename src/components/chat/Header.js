import React, { useContext, useState } from 'react';
import UserContext from '../../context/userContext';
//Components
import Invite from '../modals/Invite';
//GraphQL
import { useMutation } from '@apollo/client';
import { 
    ADD_CHANNEL_FAVORITE, 
    DELETE_CHANNEL_FAVORITE 
} from '../../graphql/mutations';

const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const context = useContext(UserContext);
    const { channel, channel: { id }, favorites, addFavorite, deleteFavorite } = context;

    const [addToFavorites] = useMutation(ADD_CHANNEL_FAVORITE, { variables: { id } });
    const [deleteFromFavorites] = useMutation(DELETE_CHANNEL_FAVORITE, { variables: { id } });

    const toggleFavorites = async opt => {
        if(opt == 'add'){
            await addToFavorites();
            addFavorite(channel);
        } else {
            await deleteFromFavorites();
            deleteFavorite(id);
        }
    }

    return (
        <>
            <header className="py-3 px-5 bg-dark-area rounded-t-lg">
                <h1 className="text-xl lg:text-3xl tracking-normal font-bold text-gray">
                    {channel && channel.name}
                    {
                        favorites.filter(ch => ch.id == id).length > 0
                        ? <i className="fas fa-star text-yellow-400 ml-2 cursor-pointer" onClick={() => toggleFavorites('remove')}></i>
                        : <i className="far fa-star text-gray ml-2 cursor-pointer" onClick={() => toggleFavorites('add')}></i>
                    }
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