import React from 'react';
import {
    Link,
} from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav-bar'>
        <p className='app-title-1'><span className='app-title-2'>PRODUCT</span> MANAGER</p>
        <ul>
            <Link to="/" className="menu-link"><li>Home</li></Link>
            <Link to="/products" className="menu-link"><li>Products</li></Link>
        </ul>
    </div>
  )
}

export default Nav