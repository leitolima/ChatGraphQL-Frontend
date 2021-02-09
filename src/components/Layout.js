import React from 'react';
import Aside from './Aside'

const Layout = ({children}) => {
    return (
        <main className="container mx-auto flex flex-col md:flex-row h-screen">
            <Aside />
            {children}
        </main>
    )
}

export default Layout;