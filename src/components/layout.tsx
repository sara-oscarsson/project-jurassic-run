import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './navbar';
import Gameboard from './gamecomponents/gameboard';
import ViewContainer from './viewContainer';
import { useState } from 'react'
import { options, Theme } from './themes';
import { useEffect } from 'react';
import { url } from 'inspector';
import '../assets/candyland.png';



export default function Layout(){
    const [background, setBackground]=useState<Theme>(options[0])

    const setSelectedBackground = (theme: Theme) => { setBackground(theme) }
    /* let body = document.body */
    /* body.classList.add('backgroundBody') */
    

    return(
        <Router>
            <Nav setBackground={setSelectedBackground}/>

            <ViewContainer background={background}/>        

        </Router>
    );

}

/* const backgroundBody: React.CSSProperties = {
   backgroundImage: `url(${chosenBackground})`,
   width: '100%',
   height: '100vh'
} */