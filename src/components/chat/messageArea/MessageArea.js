import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/userContext';
//Components
import Messages from './Messages';
import InputArea from './InputArea';
//GraphQL
import { useQuery, useSubscription } from '@apollo/client';
import { GET_MESSAGES } from '../../../graphql/querys';
import { SUBCRIPTION } from '../../../graphql/subscription';

const MessageArea = () => {

    const [loaded, setLoaded] = useState(false);

    const context = useContext(UserContext);
    const { messages, setMessages, channel: { id } } = context;

    const { data } = useQuery(GET_MESSAGES, {
        variables: { id }
    });

    const { data: datamessages } = useSubscription(SUBCRIPTION, {
        variables: { channel: id }
    });
    console.log(datamessages);

    useEffect(() => {
        if(!loaded && data){
            if(data.messages){
                setMessages(data.messages);
                setLoaded(true);
            }
        }
    }, [data]);

    return (
        <>
            <div id="message_area" className="w-full flex-grow overflow-y-scroll">
                {
                    messages.length > 0 
                    ? <Messages msgs={messages}/>
                    : null
                }
            </div>
            <InputArea />
        </>
    )
}

export default MessageArea;