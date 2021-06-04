import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './navbar';
import Gameboard from './gamecomponents/gameboard';
import ViewContainer from './viewContainer';



export default function Layout(){
    return(
        <Router>
            <Nav/>
            <ViewContainer/>        
        </Router>
    );

}