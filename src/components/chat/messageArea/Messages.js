import React from 'react';
import Message from './Message';

const Messages = ({ msgs }) => {
    return (
        <>
            {
                msgs.map(m => (
                    <Message key={m.id} msg={m}/>
                ))
            }
        </>
    )
}

export default Messages;