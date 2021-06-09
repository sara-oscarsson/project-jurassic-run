import React, { useState } from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import ThemeOfChoice, { Theme } from './themes';
import ChooseTheme from './themes';
import SimpleModal from './rulesModal';
import ExtraModal from './extraModal';

interface Props {
  setBackground: (theme: Theme) => void,
}

interface ExtraProps {
  isOpen: boolean
}

// const [isOpen, setIsOpen] = useState(false)

function Nav(props: Props, extraProps: ExtraProps) {
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
        <ChooseTheme setBackground = {props.setBackground}/>
      </ul>
      <SimpleModal/>
      {/* <div>
        <button onClick={() => setIsOpen(true)}>Modalicuious</button>
        <ExtraModal open={extraProps.isOpen}></ExtraModal>
      </div> */}
    </nav>
  );
}

export default Nav;