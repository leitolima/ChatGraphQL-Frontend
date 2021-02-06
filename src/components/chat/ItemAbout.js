import React, { useState } from 'react'

const ItemAbout = ({ icon, title, children }) => {

    const [show, setShow] = useState(false);

    return (
        <li 
            onClick={() => setShow(!show)}
            className={`${show ? 'text-gray-700' : 'text-gray-500'} w-full border-t border-gray-300 px-4 py-2 font-semibold`}
        >
            {
                show
                ? <i className="fas fa-caret-down mr-5"></i>
                : <i className="fas fa-caret-right mr-5"></i>
            }
            <i className={`fas fa-${icon} mr-2`}></i>
            {title}
            <div className={`${show ? 'block' : 'hidden'} text-gray-600 font-normal mt-2 pb-2`}>
                { children }
            </div>
        </li>
    )
}

export default ItemAbout;