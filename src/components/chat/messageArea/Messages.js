import React from 'react';
import Message from './Message';
import NoMessages from './NoMessages';

const Messages = ({ msgs }) => {
    return (
        <>
            {
                msgs.length > 0
                ? msgs.map(m => (
                    <Message key={m.id} msg={m}/>
                )) : <NoMessages />
            }
        </>
    )
}

export default Messages;