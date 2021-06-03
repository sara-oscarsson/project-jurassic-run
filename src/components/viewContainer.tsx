import * as React from 'react';
import Gameboard from './gameboard';
import Info from './info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function ViewContainer(){
    return(
        <>
        <Route path="/gameboard" component={Gameboard}/>
        <Route path="/info" component={Info}/>
        </>
    );
}