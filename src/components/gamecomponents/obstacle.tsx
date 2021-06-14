import * as React from 'react';
import car from './../../assets/car.png';
import boulder from './../../assets/boulder.png';
import raptor from './../../assets/raptor.png';
import jurassic from './../../assets/jurassic.png';
import sport from './../../assets/sport.png';
import { useState, useEffect } from 'react';



interface Props {
    obstaclePosition: number
}

interface ImageOptions {
    id: number,
    backgroundImage: string
}

const Options: ImageOptions[] = [{
    id: 0,
    backgroundImage: car
},
{
    id: 1,
    backgroundImage: boulder

}, 
{
    id: 2,
    backgroundImage: raptor

},
{
    id: 3,
    backgroundImage: jurassic

},
{
    id: 4,
    backgroundImage: sport

}]

const Obstacle = (props: Props) =>{
    const [chosenObstacle, setChosenObstacle] = useState<string>(car)

    useEffect(()=>{
        if(props.obstaclePosition < 0){
            let index: number = Math.floor(Math.random() * 5);
            console.log(index)
            /* let newImage: string = Options[index].backgroundImage */
            setChosenObstacle(Options[index].backgroundImage)

        }
    })
    


    return(
        <>
        <div className="dino" style={{
            height: '80px',
            width: "80px",
            backgroundImage: `url(${chosenObstacle})`,
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