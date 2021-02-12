import React, { useContext, useEffect, useRef } from 'react';
import UserContext from '../../../context/userContext';
//Components
import Messages from './Messages';
import InputArea from './InputArea';
//GraphQL
import client from '../../../config/apollo';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_MESSAGES } from '../../../graphql/querys';
import { SUBCRIPTION } from '../../../graphql/subscription';

const MessageArea = () => {

    const el = useRef(null);

    const context = useContext(UserContext);
    const { messages, setMessages, addNewMessage, channel: { id } } = context;

    const { data: oldmessages } = useQuery(GET_MESSAGES, {
        variables: { id }
    });

    const { data: newmessage } = useSubscription(SUBCRIPTION, {
        variables: { channel: id }
    });

    const scrollToBottom = () => {
        setTimeout(el.current.scrollIntoView({ behavior: "smooth" }), 100);
    }

    const updateCacheMessages = msg => {
        client.cache.writeQuery({ 
            query: GET_MESSAGES,
            variables: { id },
            data: { messages: [...messages, msg] }
        });

    } 

    useEffect(() => {
        if(oldmessages){
            if(oldmessages.messages){
                setMessages(oldmessages.messages);
            }
        }
    }, [oldmessages]);

    useEffect(() => {
        if(newmessage){
            if(newmessage.message){
                addNewMessage(newmessage.message);
                updateCacheMessages(newmessage.message);
            }
        }
    }, [newmessage]);

    useEffect(() => {
        if(messages.length > 0) scrollToBottom()
    }, [messages])

    return (
        <>
            <div id="message_area" className="w-full flex-grow overflow-y-scroll">
                {
                    messages.length > 0 
                    ? <Messages msgs={messages}/>
                    : null
                }
                <div ref={el}></div>
            </div>
            <InputArea />
        </>
    )
}

export default MessageArea;