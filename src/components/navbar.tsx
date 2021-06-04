import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import ThemeOfChoice from './themes'

function Nav() {
  return (
    <nav className="nav">
      <h3>Logo</h3>
      <ul>
        <Link to='/gameboard'>
          <li>Gameboard</li>
        </Link>
        <Link to='/info'>
          <li>Info</li>
        </Link>
        <ThemeOfChoice />
      </ul>
    </nav>
  );
}

export default Nav;