import React from 'react';
import { createInviteMessage } from '../../const/message';

const Invite = ({ show, closeModal, channelId }) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(createInviteMessage(channelId));
        closeModal();
    }
    
    return (
        <div className={`${show ? 'flex' : 'hideen'} fixed w-full h-screen top-0 left-0 justify-center items-center`}>
            <div className={`${show ? 'block' : 'hidden'} w-full h-full bg-black opacity-50 z-20`}></div>
            <div
                className="fixed bg-dark-modal w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-700 py-4 px-5 rounded z-30"
            >
                <label className="font-semibold block text-gray uppercase tracking-normal text-xs mb-1 mt-4">Invite a friend</label>
                <div className="block w-full p-2 bg-input border border-gray text-gray rounded mb-2">
                    <p>Click on the "Copy" button to copy an invitation's message. Send that message to some friend. He/she must be registered to join in any channel.</p>
                </div>
                <button 
                    onClick={copyToClipboard}
                    className="block rounded w-full text-gray uppercase font-bold py-1 focus:outline-none bg-green-500 hover:bg-green-600 mb-2"
                >Copy</button>
                <button 
                    onClick={closeModal}
                    className="block rounded w-full text-gray uppercase font-bold py-1 focus:outline-none bg-red-500 hover:bg-red-600"
                >Cancell</button>
            </div>
        </div>
    )
}

export default Invite;