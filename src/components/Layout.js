import React from 'react';
import Aside from './Aside'

const Layout = ({children}) => {
    return (
        <section className="container mx-auto flex flex-row h-screen">
            <Aside />
            {children}
        </section>
    )
}

export default Layout;