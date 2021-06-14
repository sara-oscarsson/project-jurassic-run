import * as React from 'react';



interface Props {
    obstaclePosition: number
}

const Obstacle = (props: Props) =>{

    


    return(
        <>
        <div className="dino" style={{
            height: '70px',
            width: "70px",
            backgroundColor: "orange",
            bottom: `20px`,
            position: "absolute",
            left: `${props.obstaclePosition}px`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
            }}/>
        </>
    );
}
export default Obstacle;