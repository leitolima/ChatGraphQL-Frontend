import React, { useContext } from 'react';
import UserContext from '../context/userContext';
//Components
import Chat from '../components/chat';
import About from '../components/chat/About';
import NoChat from '../components/chat/NoChat';

const Home = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    return (
        <>
            { channel ? <><Chat/><About/></> : <NoChat /> }
        </>
    )
}

export default Home;