import React, { useContext, useState } from 'react';
import UserContext from '../context/userContext';
import { Link } from 'react-router-dom';
//Modal
import NewChannel from './modals/NewChannel';

const Aside = () => {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const context = useContext(UserContext);
    const { username, image, channels, favorites } = context;

    return (
        <aside className="w-full md:w-1/4 bg-dark-1 py-14 px-8 text-gray">
            <div>
                <h1 className="text-3xl font-semibold">
                    <i className="fas fa-code mr-2"></i>
                    Chat App
                </h1>
                <div className="flex flex-row items-center mt-3">
                    <img src={image} className="w-12 h-12 rounded-full" alt=""/>
                    <p className="font-semibold text-lg ml-2 capitalize">{username}</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col">
                <div className="w-1/2 order-2 md:order-1 md:w-full mt-14">
                    <h2 className="text-base lg:text-xl uppercase font-semibold">
                        <i className="fas fa-star mr-2"></i>Favorites
                    </h2>
                    <nav className="list-none mt-2">
                        {
                            favorites.length ? favorites.map(c => (
                                <li># JavaScript</li>
                            )) : <li>Add a channel to fav</li>
                        }
                    </nav>
                </div>
                <div className="w-1/2 order-1 md:order-2 md:w-full mt-14">
                    <h2 className="text-base lg:text-xl uppercase font-semibold">
                        <i className="fas fa-exchange-alt mr-2"></i>
                        Channels ({channels.length})
                        <i className="fas fa-plus ml-4 cursor-pointer" onClick={() => setShowModal(true)}></i>
                    </h2>
                    <nav className="list-none mt-2">
                        {
                            channels.length ? channels.map(c => (
                                <li key={c.id}><Link to={`/channel/${c.id}`}># {c.name}</Link></li>
                            )) : <li>No channels yet</li>
                        }
                    </nav>
                </div>
            </div>
            {showModal && <NewChannel show={showModal} closeModal={closeModal}/>}
        </aside>
    )
}

export default Aside;