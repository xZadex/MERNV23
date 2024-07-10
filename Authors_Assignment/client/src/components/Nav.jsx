import React from 'react';
import {
    Link,
} from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav-bar'>
        <p className='app-title-1'>AUTHORS</p>
        <ul>
            <Link to="/" className="menu-link"><li>Home</li></Link>
            <Link to="/authors/new" className="menu-link"><li>Create</li></Link>
            <Link to="/authors" className="menu-link"><li>Authors</li></Link>
        </ul>
    </div>
  )
}

export default Nav