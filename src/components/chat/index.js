import React from 'react';
import Header from './Header';
import MessageArea from './messageArea/MessageArea';

const Chat = () => {
    return (
        <article className="w-1/2 bg-gray px-4 py-4 flex flex-col">
            <Header />
            <MessageArea />
        </article>
    )
}

export default Chat;