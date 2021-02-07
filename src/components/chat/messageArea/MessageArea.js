import React, { useContext } from 'react';
import InputArea from './InputArea';
import UserContext from '../../../context/userContext';

const MessageArea = () => {

    const context = useContext(UserContext);
    const { channel } = context;

    return (
        <div className="flex flex-col flex-1 bg-white border border-gray-300 mt-3">
            <div className="w-full flex-1"></div>
            {
                channel ? <InputArea /> : null
            }
        </div>
    )
}

export default MessageArea;