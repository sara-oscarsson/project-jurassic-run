import * as React from 'react';
import dinoImage from './../../assets/dino.png';


interface Props {
    jumpHeight: number
}

const Dino = (props: Props) =>{
    return(
        <div className="dino" style={{
            height: '200px',
            width: "200px",
            backgroundImage: `url(${dinoImage})`,
            bottom: `${props.jumpHeight}px`,
            position: "absolute",
            left: "200px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
            }}/>
    );
}
export default Dino;