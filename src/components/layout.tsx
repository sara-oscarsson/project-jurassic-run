import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './navbar';
import Gameboard from './gamecomponents/gameboard';
import ViewContainer from './viewContainer';
import { useState } from 'react'
import { Options, Theme } from './themeArray';
import '../assets/candyland.png';
import ErrorBoundary from './errorBoundry';


export default function Layout(){
    const [background, setBackground]=useState<Theme>(Options[0])

    const setSelectedBackground = (theme: Theme) => { setBackground(theme) }

    return(
        <Router>
            <ErrorBoundary>
            <Nav setBackground={setSelectedBackground}/>
            </ErrorBoundary>
            <ViewContainer background={background}/>        
        </Router>
    );

}

