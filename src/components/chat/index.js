import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/userContext';
//Components
import Header from './Header';
import MessageArea from './messageArea/MessageArea';
import JoinToChannel from '../modals/JoinToChannel';

const Chat = () => {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const context = useContext(UserContext);
    const { channel, channels } = context;

    useEffect(() => {
        if(channel){
            const { id } = channel;
            const index = channels.findIndex(e => e.id == id);
            if(index == -1){
                setShowModal(true);
            }
        }
    }, [channel]);

    return (
        <section className="w-full md:w-3/4 lg:w-1/2 px-4 py-4 flex flex-col h-screen">
            {
                channel 
                ? <>
                    <Header />
                    <article className="flex flex-col overflow-y-auto flex-1 max-h-screen bg-dark-area rounded-b-lg px-3">
                        <MessageArea />
                    </article>
                    {showModal && <JoinToChannel show={showModal} closeModal={closeModal}/>}
                </>
                :null
            }
            
        </section>
    )
}

export default Chat;