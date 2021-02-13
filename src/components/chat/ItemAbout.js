import React from 'react'

const ItemAbout = ({ icon, title, children }) => {

    return (
        <li className="w-full border-t border-gray px-4 py-2 font-semibold">
            <p className="text-gray">
                <i className="fas fa-${icon} mr-2"></i>
                {title}
            </p>
            <div className="subtext-gray font-normal mt-2 pb-2">
                { children }
            </div>
        </li>
    )
}

export default ItemAbout;