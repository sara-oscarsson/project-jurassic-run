import * as React from 'react';
import dinoImage from './../../assets/dino.png';


interface Props {
    jumpHeight: number
    makeDinoJump: () => void
}

const Dino = (props: Props) =>{

    


    return(
        <>
        <button onClick={props.makeDinoJump}>JUMP</button>
        <div className="dino" style={{
            height: '150px',
            width: "250px",
            backgroundImage: `url(${dinoImage})`,
            bottom: `${props.jumpHeight}px`,
            position: "absolute",
            left: "150px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
            }}/>
        </>
    );
}
export default Dino;