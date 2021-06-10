import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import ThemeOfChoice from './themes'
import imageSource from './../assets/logo.png'

function Nav() {

  console.log(imageSource)

  return (
    <nav className="nav centerContent">
        <img src={imageSource} alt="" />
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
  )
}



export default Nav;