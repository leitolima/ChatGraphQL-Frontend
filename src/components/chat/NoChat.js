import React from 'react';

const NoChat = () => {
    return (
        <article className="w-3/4 bg-gray px-4 py-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold w-1/2 text-center text-gray-700">Select or create a new Channel to start chatting</h1>
            <i className="fas fa-comments text-center text-gray-700 text-6xl mt-4"></i>
        </article>
    )
}

export default NoChat;