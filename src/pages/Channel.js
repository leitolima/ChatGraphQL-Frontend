import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../context/userContext';
//Components
import Chat from '../components/chat';
import About from '../components/chat/About';
//GraphQL
import { useLazyQuery } from '@apollo/client';
import { GET_CHANNEL } from '../graphql/querys';

const Channel = () => {

    const { id } = useParams();

    const context = useContext(UserContext);
    const { selectChannel } = context;

    const [toDo, { data }] = useLazyQuery(GET_CHANNEL, {
        variables: { id }
    });

    useEffect(() => {
        if(!data){
            toDo();
        } else if(data.channel){
            selectChannel(data.channel);
        }
    }, [id, data]);

    return (
        <>
            <Chat/>
            <About/>
        </>
    )
}

export default Channel;