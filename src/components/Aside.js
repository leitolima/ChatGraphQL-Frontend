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
        <aside id="left_aside" className="w-full md:w-1/4 bg-dark-1 py-7 text-gray h-screen max-h-screen md:flex md:flex-col md:flex-1">
            <div className="pb-7 px-8">
                <h1 className="text-3xl font-semibold">
                    <i className="fas fa-code mr-2"></i>
                    Chat App
                </h1>
                <div className="flex flex-row items-center mt-3">
                    <img src={image} className="w-12 h-12 rounded-full object-cover" alt=""/>
                    <p className="font-semibold text-lg ml-2 capitalize">{username}</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col overflow-y-auto px-8">
                <div className="w-1/2 order-2 md:order-1 md:w-full mt-14">
                    <h2 className="text-base lg:text-xl uppercase font-semibold">
                        <i className="fas fa-star mr-2"></i>Favorites
                    </h2>
                    <nav className="list-none mt-2">
                        {
                            favorites.length ? favorites.map(c => (
                                <li key={c.id}><Link to={`/channel/${c.id}`}># {c.name}</Link></li>
                            )) : <li>Add a channel to fav</li>
                        }
                    </nav>
                </div>
                <div className="w-1/2 order-1 md:order-2 md:w-full mt-14">
                    <h2 className="text-base lg:text-xl uppercase font-semibold">
                        <i className="fas fa-plus mr-2 cursor-pointer" onClick={() => setShowModal(true)}></i>
                        Channels ({channels.length})
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