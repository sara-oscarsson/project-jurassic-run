import * as React from 'react';
import Gameboard from './gamecomponents/gameboard';
import Info from './info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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


const ViewContainer: React.FC/*<ChildComponentProps>*/ = (props) => {
    
   // background = props.backgroundImage

    return(
        <>
            <div /*style = { gameStyle }*/>
            <Route path="/gameboard" component={Gameboard}/>
            </div>
            
            <Route path="/info" component={Info}/>
        </>
    );
    
    
}

// const gameStyle: React.CSSProperties = {
//   backgroundImage: `url(${background})`

// }

export default ViewContainer