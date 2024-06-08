import React from 'react';

import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <NavLink className='navbar-brand'>Profile management</NavLink>
          </div>
          <ul className='nav navbar-nav'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Signup</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
