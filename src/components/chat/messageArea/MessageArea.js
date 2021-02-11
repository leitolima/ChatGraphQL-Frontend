import React, { useContext } from 'react';
import UserContext from '../../../context/userContext';
//Components
import Messages from './Messages';
import InputArea from './InputArea';
//GraphQL
import { useQuery, useSubscription } from '@apollo/client';
import { GET_MESSAGES } from '../../../graphql/querys';
import { SUBCRIPTION } from '../../../graphql/subscription';

const MessageArea = () => {

    const context = useContext(UserContext);
    const { channel: { id } } = context;

    const { data } = useQuery(GET_MESSAGES, {
        variables: { id }
    });

    const { data: datamessages } = useSubscription(SUBCRIPTION, {
        variables: { channel: id }
    });
    console.log(datamessages);

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