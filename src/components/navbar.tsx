import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import ThemeOfChoice from './themes'

function Nav() {
  return (
    <nav className="nav centerContent">
      <h3>Logo</h3>
      <ul className= "span">
        <Link to='/gameboard'>
          <li className= "span">Gameboard</li>
        </Link>
        <Link to='/info'>
          <li className= "span">Info</li>
        </Link>
        <ThemeOfChoice />
      </ul>
    </nav>
  );
}

export default Nav;