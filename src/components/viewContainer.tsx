import * as React from 'react';
import Gameboard from './gamecomponents/gameboard';
import Info from './info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import ErrorBoundary from './errorBoundry';

interface Props{
    background: {
        id: number,
        label: string,
        value: string,
        backgroundImage: string

    }
}

const ViewContainer = (props: Props) =>{
    
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <ErrorBoundary>
                <Route path="/info" component={Info}/>
                <Route path="/gameboard" component={() => <Gameboard background={props.background}/>}/>
            </ErrorBoundary>

            
        </Switch>
    );
    
    
}

export default ViewContainer