import React, { useContext, useEffect, useRef, useState } from 'react';
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

    const [fetch, setFecth] = useState(false);

    const { data: oldmessages, refetch } = useQuery(GET_MESSAGES, {
        variables: { id }
    });

    const { data: newmessage } = useSubscription(SUBCRIPTION, {
        variables: { channel: id }
    });

    const scrollToBottom = () => {
        el.current.scrollTop = el.current.scrollHeight;
    }

    const updateCacheMessages = msg => {
        client.cache.writeQuery({ 
            query: GET_MESSAGES,
            variables: { id },
            data: { messages: [...messages, msg] }
        });
    } 

    useEffect(() => {
        const result = client.cache.readQuery({ query: GET_MESSAGES, variables: { id } })
        if(result){ refetch(); }
    }, [id]);

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
        if(messages.length > 0){
            scrollToBottom();
        } 
    }, [messages])

    return (
        <>
            <div id="message_area" ref={el} className="w-full flex-grow overflow-y-scroll border border-gray rounded-lg mb-2 bg-image">
                { <Messages msgs={messages}/> }
            </div>
            <InputArea />
        </>
    )
}

export default MessageArea;