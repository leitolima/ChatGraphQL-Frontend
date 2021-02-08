import React, { useContext, useEffect } from 'react';
import UserContext from '../../../context/userContext';
//Components
import Messages from './Messages';
import InputArea from './InputArea';
//GraphQL
import { useQuery } from '@apollo/client';
import { GET_MESSAGES } from '../../../graphql/querys';

const MessageArea = () => {

    const context = useContext(UserContext);
    const { channel: { id } } = context;

    const { data } = useQuery(GET_MESSAGES, {
        variables: { id }
    });

    return (
        <>
            <div id="message_area" className="w-full flex-grow overflow-y-scroll">
                {
                    data && data.messages 
                    ? <Messages msgs={data.messages}/>
                    : null
                }
            </div>
            <InputArea />
        </>
    )
}

export default MessageArea;