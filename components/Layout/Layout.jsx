import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className={`font-Mortend bg-black text-white min-h-screen`}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;