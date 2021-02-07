import React from 'react'

const Message = ({ msg }) => {
    return (
        <div className="w-full px-8 py-4 flex flex-row">
            <div className="pr-4">
                <img src={msg.user.image} className="w-10 h-10 rounded-full" alt=""/>
            </div>
            <div className="pl-4 border-l-4 border-yellow-500">
                <p className="text-lg capitalize text-gray-800">{msg.user.username}</p>
                <p className="text-gray-600">{msg.text}</p>
            </div>
        </div>
    )
}

export default Message
