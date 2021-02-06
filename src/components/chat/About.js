import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
import ItemAbout from './ItemAbout';

const About = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    return (
        <aside className="w-1/4 bg-gray px-4 py-4">
            <div className="bg-white border border-gray-300 rounded">
                <header className="p-3">
                    <h1 className="text-2xl tracking-normal font-bold text-gray-700">
                        About Channel
                    </h1>
                </header>
                <ul className="list-none text-gray-500">
                    <ItemAbout icon="info" title="Channel details">
                        <p className="">{channel && channel.description}</p>
                    </ItemAbout>
                    <ItemAbout icon="pen-fancy" title="Created By">
                        <p className="capitalize font-semibold">{channel && channel.creator.username}</p>
                        <p className="capitalize">{channel && channel.creator.name} {channel && channel.creator.lastname}</p>
                    </ItemAbout>
                </ul>
            </div>
        </aside>
    )
}

export default About;