import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
//Components
import Header from './Header';
import MessageArea from './messageArea/MessageArea';

const Chat = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    return (
        <article className="w-1/2 bg-gray px-4 py-4 flex flex-col h-screen">
            <Header />
            <div className="flex flex-col overflow-y-auto flex-1 max-h-screen bg-white border border-gray-300 mt-3">
                { channel ? <MessageArea /> : null }
            </div>
        </article>
    )
}

export default Chat;