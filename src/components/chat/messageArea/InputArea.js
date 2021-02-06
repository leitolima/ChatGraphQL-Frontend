import React from 'react';

const InputArea = () => {
    return (
        <div className="w-full">
            <input type="text" id="message" placeholder="Type your message..." className="w-full border-t border-gray-300 py-2 px-4 text-gray-800 focus:outline-none"/>
            <div className="flex h-10 flex-row">
                <button className="w-1/2 text-center bg-yellow-500 hover:bg-yellow-600 focus:outline-none uppercase text-white font-semibold">Reply</button>
                <button className="w-1/2 text-center bg-green-500 hover:bg-green-600 focus:outline-none uppercase text-white font-semibold">Media</button>
            </div>
        </div>
    )
}

export default InputArea;