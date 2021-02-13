import React from 'react'

const Message = ({ msg }) => {
    return (
        <div className="w-full px-8 py-4 flex flex-row">
            <img src={msg.user.image} className="w-10 h-10 rounded-full object-cover mr-4" alt=""/>
            <div className="pl-4 border-l-4 border-lightblue">
                <p className="text-lg capitalize text-gray">{msg.user.username}</p>
                <p className="subtext-gray">{msg.text}</p>
            </div>
        </div>
    )
}

export default Message
