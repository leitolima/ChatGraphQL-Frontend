import React, { useContext, useEffect } from 'react';
import UserContext from '../../../context/userContext';
//Components
import Messages from './Messages';
import InputArea from './InputArea';
//GraphQL
import { useLazyQuery } from '@apollo/client';
import { GET_MESSAGES } from '../../../graphql/querys';

const MessageArea = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    const [toDo, { data }] = useLazyQuery(GET_MESSAGES, {
        variables: {
            id: channel.id
        }
    });

    useEffect(() => {
        fetchMessages();
    }, [channel]);

    const fetchMessages = async () => {
        toDo();
    }

    return (
        <>
            <div id="message_area" className="w-full flex-grow overflow-y-scroll">
                {
                    data && data.messages 
                    ? <Messages msgs={data.messages}/>
                    : null
                }
            </div>
            {
                channel ? <InputArea /> : null
            }
        </>
    )
}

export default MessageArea;