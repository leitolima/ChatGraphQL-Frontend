import React from 'react';
import Message from './Message';
import NoChat from '../NoChat';

const Messages = ({ msgs }) => {
    return (
        <>
            {
                msgs.length > 0
                ? msgs.map(m => (
                    <Message key={m.id} msg={m}/>
                )) : <NoChat label="No messages in this channel yet" css=""/>
            }
        </>
    )
}

export default Messages;