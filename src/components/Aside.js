import React from 'react'

const Aside = () => {
    return (
        <aside className="w-1/4 bg-dark-1 py-14 px-8 text-gray">
            <div>
                <h1 className="text-3xl font-semibold">
                    <i className="fas fa-code mr-2"></i>
                    Chat App
                </h1>
                <div className="flex flex-row items-center mt-3">
                    <img src="https://res.cloudinary.com/dspswtipv/image/upload/v1608780067/cihpcvkxc20fmniyltnq.png" className="w-12 h-12 rounded-full" alt=""/>
                    <p className="font-semibold text-lg ml-2">Leytholima</p>
                </div>
            </div>
            <div className="mt-14">
                <h2 className="text-xl uppercase font-semibold">
                    <i className="fas fa-star mr-2"></i>Favorites
                </h2>
                <nav className="list-none mt-2">
                    <li># JavaScript</li>
                </nav>
            </div>
            <div className="mt-14">
                <h2 className="text-xl uppercase font-semibold">
                    <i className="fas fa-exchange-alt mr-2"></i>
                    Channels (2)
                    <i className="fas fa-plus ml-4"></i>
                </h2>
                <nav className="list-none mt-2">
                    <li># JavaScript</li>
                    <li># React</li>
                </nav>
            </div>
        </aside>
    )
}

export default Aside
