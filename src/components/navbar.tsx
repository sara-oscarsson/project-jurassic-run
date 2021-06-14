import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import imageSource from "./../assets/newLogo.png";
import ThemeOfChoice, { Theme } from "./themes";
import ChooseTheme from "./themes";
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
  const changeModalState = () => {
    setIsModalOpen(true);
  };
  return (
    <nav className="nav centerContent">
      <Link to="/">
        <img src={imageSource} alt="" />
      </Link>
      <ul className="span">
        <Link to="/gameboard">
          <li className="span">Gameboard</li>
        </Link>
        <Link to="/info">
          <li className="span">Info</li>
        </Link>
        <ChooseTheme setBackground={props.setBackground} />
      </ul>
      <SimpleModal />
      <button onClick={changeModalState}>Modal med react router</button>
      {isModalOpen ? (
        <ExtraModal isOpen={isModalOpen}>
          <h3>
            Här är en modal
            <button className="btn-close" onClick={() => setIsModalOpen(false)}>
              Stäng
            </button>
          </h3>
        </ExtraModal>
      ) : null}

      {/* <div>
        <button onClick={() => setIsOpen(true)}>Modalicuious</button>
        <ExtraModal open={extraProps.isOpen}></ExtraModal>
      </div> */}
    </nav>
  );
}

export default Nav;
