import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './navbar';
import Gameboard from './gamecomponents/gameboard';
import ViewContainer from './viewContainer';
import { useState } from 'react'
import { Options, Theme } from './themeArray';
import { useEffect } from 'react';
import { url } from 'inspector';
import '../assets/candyland.png';
import ErrorBoundary from './errorBoundry';



export default function Layout(){
    const [background, setBackground]=useState<Theme>(Options[0])

    const setSelectedBackground = (theme: Theme) => { setBackground(theme) }
    /* let body = document.body */
    /* body.classList.add('backgroundBody') */
    

    return(
        <Router>
            <ErrorBoundary>
            <Nav setBackground={setSelectedBackground}/>
            </ErrorBoundary>
            <ViewContainer background={background}/>        

        </Router>
    );

}

/* const backgroundBody: React.CSSProperties = {
   backgroundImage: `url(${chosenBackground})`,
   width: '100%',
   height: '100vh'
} */