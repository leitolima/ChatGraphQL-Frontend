import React from 'react'

const About = () => {
    return (
        <aside className="w-1/4 bg-gray px-4 py-4">
            <div className="bg-white border border-gray-300 rounded">
                <header className="p-3">
                    <h1 className="text-2xl tracking-normal font-bold text-gray-700">
                        About #JavaScript
                    </h1>
                </header>
                <ul className="list-none text-gray-500">
                    <li className="w-full border-t border-gray-300 px-4 py-2 text-gray-600 font-semibold">
                        <i className="fas fa-caret-down mr-5"></i>
                        <i className="fas fa-info mr-2"></i>
                        Channel details
                        <div className="text-gray-600 font-normal mt-2 pb-2">
                            <p className="">For users who loves Javascript</p>
                        </div>
                    </li>
                    <li className="w-full border-t border-gray-300 px-4 py-2 font-semibold">
                        <i className="fas fa-caret-right mr-5"></i>
                        <i className="fas fa-pen-fancy mr-2"></i>
                        Created By
                        <div className="hidden text-gray-600 font-normal mt-2 pb-2">
                            <p className="font-semibold">Leytholima</p>
                            <p className="">Leonel Lima</p>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default About;