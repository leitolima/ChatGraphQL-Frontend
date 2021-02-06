import React from 'react';
import Aside from '../components/Aside';
import Chat from '../components/chat';
import About from '../components/chat/About';

const Home = () => {
    return (
        <section className="container mx-auto flex flex-row h-screen">
            <Aside />
            <Chat />
            <About />
        </section>
    )
}

export default Home;