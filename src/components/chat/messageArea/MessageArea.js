import React from 'react';
import InputArea from './InputArea';

const MessageArea = () => {
    return (
        <div className="flex flex-col flex-1 bg-white border border-gray-300 mt-3">
            <div className="w-full flex-1"></div>
            <InputArea />
        </div>
    )
}

export default MessageArea;