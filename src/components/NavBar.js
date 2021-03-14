import React from 'react';
import avatar from '../img/mainProfilePic.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img src={avatar} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName='active'>
              <p>Home</p>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>
              <p>About</p>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/portfolio' exact activeClassName='active'>
              <p>Portfolio</p>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/blog' exact activeClassName='active'>
              <p>Blog</p>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
        <footer className='footer'>
          <p>Copyright © Karsen Hansen • 2021</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
