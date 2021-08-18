import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import imageSource from "./../assets/newLogo.png";
import { Theme } from "./themeArray";
import ChooseTheme from "./chooseTheme";
import SimpleModal from "./rulesModal";
import ExtraModal from "./extraModal";


interface Props {
  setBackground: (theme: Theme) => void;
}

interface ExtraProps {
  isOpen: boolean;
}

function Nav(props: Props, extraProps: ExtraProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobile, setIsMobile] = useState(false);
  const changeModalState = () => {
    setIsModalOpen(true);
  };

  window.addEventListener('resize', () => {
    console.log(window.innerWidth)
    if(window.innerWidth < 800){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  })

  return (
    <nav className="nav centerContent" style={ mobile ? mobileStyle : computer }>
      <Link to="/">
        <img src={imageSource} alt="" style={ mobile ? mobileImg : computerImg }/>
      </Link>
      <ul className="span"  style={ mobile ? mobileStyle : computer }>
        <Link to="/gameboard">
          <li className="span">Start Game</li>
        </Link>
        <Link to="/info">
          <li className="span">About Dino</li>
        </Link>
      <li className="span">
        <SimpleModal />
      </li>
        <li className="span">
        <button className='jurassicFont' style={ styleModal } onClick={changeModalState}>Why cant dinosaurs clap their hands?</button>
      </li>
      {isModalOpen ? (
        <ExtraModal isOpen={isModalOpen}>
          <h3>
            Because they are extinct...
            <button className="btn-close" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </h3>
        </ExtraModal>
      ) : null}
        <li className="span">
          <ChooseTheme setBackground={props.setBackground} />

        </li>
      </ul>
    </nav>
  );
}

export default Nav;

const styleModal: React.CSSProperties = {
  backgroundColor: 'white',
	borderRadius: '15px',
	border:'1px solid white',
	display:'inline-block',
	cursor: 'pointer',
  fontWeight: 1000,
	color:'rgb(37, 82, 43)',
	fontSize: '40px',
	textDecoration: 'none',
  margin: '5px',
  
}
const computer: React.CSSProperties = {
  backgroundColor: 'white'

	 
}

const computerImg: React.CSSProperties = {
  alignSelf: 'flex-start',
  marginRight: '5vh',

	 
}
const mobileImg: React.CSSProperties = {
  alignSelf: 'center',
  marginRight: '0',
  width: '100%'

	 
}

const mobileStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
	
}
