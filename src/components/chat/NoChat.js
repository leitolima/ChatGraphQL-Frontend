import React from 'react';

const NoChat = ({ label = 'Select or create a new Channel to start chatting', css = 'md:w-3/4 px-4 py-4' }) => {
    return (
        <article className={`${css} w-full h-full flex flex-col justify-center items-center`}>
            <h1 className="text-xl lg:text-3xl font-semibold w-1/2 text-center text-gray">{ label }</h1>
            <i className="fas fa-comments text-center text-lightblue text-6xl mt-4"></i>
        </article>
    )
}

export default NoChat;