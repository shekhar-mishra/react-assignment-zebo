import React from 'react';
import zeboLogo from '../Assets/image/zebo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  app-header-bg-color ">
            <a className="navbar-brand text-color-white m-l-11" href="#">zebo.io
            <img src={zeboLogo}  className="float-left m-r-4 " alt={'zebo logo'}/>
            </a>
        </nav>
    )
}

export default Navbar;