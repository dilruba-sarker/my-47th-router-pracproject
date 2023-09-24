import React from 'react';
import { NavLink } from 'react-router-dom';
import Favorites from './../../../Pages/Favorites/Favorites';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className=''>
           <nav className='flex justify-between shadow-md px-6 py-5'>
           <Logo></Logo>
            <ul className="flex gap-5">
<li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ?"text-green-400 underline" : ""
  }
>
  Home
</NavLink></li>
<li>
    <NavLink to='/favorites'
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ?"text-green-400 underline" : ""
  } >
        Favorites
    </NavLink>
</li>
<li>
    <NavLink to='/login'
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ?"text-green-400 underline" : ""
  } >
        Login
    </NavLink>
</li>

            </ul>
           </nav>
        </div>
    );
};

export default Navbar;