import React from 'react'

const SubmitButton = ({text}) => {
    return (
        <button 
            type="submit"
            className="block w-full bg-green-400 text-white uppercase font-bold py-2 focus:outline-none focus:bg-green-500 rounded mt-4"
        >{text}</button>
    )
}

export default SubmitButton;