import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';
//Components
import SubmitButton from '../submitButton';
//GraphQL
import { useMutation } from '@apollo/client';
import { JOIN_TO_CHANNEL } from '../../graphql/mutations';

const JoinToChannel = ({show, closeModal}) => {

    const history = useHistory();

    const context = useContext(UserContext);
    const { joinToChannel, channel: { id } } = context;

    const [joinChannel] = useMutation(JOIN_TO_CHANNEL, {
        variables: { id }
    });

    const handleSubmit = async e => {
        e.preventDefault();
        const { data: { channel } } = await joinChannel();
        joinToChannel(channel);
        closeModal();
    }

    const handleCancel = () => {
        closeModal();
        history.push('/');
    }

    return (
        <section className={`${show ? 'flex' : 'hideen'} fixed w-full h-screen top-0 left-0 justify-center items-center`}>
            <div className={`${show ? 'block' : 'hidden'} w-full h-full bg-black opacity-50 z-20`}></div>
            <form
                onSubmit={handleSubmit}
                className="fixed bg-dark-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-700 py-6 px-5 rounded z-30"
            >
                <h1 className="text-center text-white text-2xl font-semibold">Join Channel</h1>
                <p className="text-center text-white w-2/3 mx-auto">
                    You are not a member of this channel yet. Would you like yo join?
                </p>
                <SubmitButton text="Join me"/>
                <button 
                    type="button"
                    onClick={handleCancel}
                    className="block w-full bg-red-400 text-white uppercase font-bold py-2 focus:outline-none focus:bg-red-500 rounded mt-4"
                >Cancel</button>
            </form>
        </section>
    )
}

export default JoinToChannel;