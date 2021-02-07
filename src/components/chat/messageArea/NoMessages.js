import React from 'react';

const NoMessages = () => {
    return (
        <div className="w-full h-full text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold w-1/2 text-center text-gray-700">No messages in this channel yet</h1>
            <i className="fas fa-comments text-center text-gray-700 text-6xl mt-4"></i>
        </div>
    )
}

export default NoMessages;