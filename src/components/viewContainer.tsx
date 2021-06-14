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
// interface Item {
//     id: number,
//     label: string,
//     value: string,
//     backgroundImage: string
// }

// interface ChildComponentProps {
//     id: number,
//     label: string,
//     value: string,
//     backgroundImage: string
// }

// let background


/* const ViewContainer: React.FC<ChildComponentProps> = (props) => { */
const ViewContainer = (props: Props) =>{
    
   // background = props.backgroundImage

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

// const gameStyle: React.CSSProperties = {
//   backgroundImage: `url(${background})`

// }

export default ViewContainer