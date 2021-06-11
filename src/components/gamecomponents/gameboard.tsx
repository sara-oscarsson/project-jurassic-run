import React, { useState, useEffect } from 'react';
import Jump from './jumpFunction';
import Dino from './dino';


interface Props{
    background: {
        id: number,
        label: string,
        value: string,
        backgroundImage: string

    }
}

const Gameboard = (props: Props) =>{
    /* 
    Här vill vi ha states som påverkar dino och obstacles
    i denna vill vi ha funktionerna som påverkar state

    */
   useEffect(()=>{
       console.log(props.background)

   })
    const [isGameOver, setIsGameOver] = useState<boolean>(true)
    const [jumpHeight, setJumpHeight] = useState<number>(80)
    /* const [score, setScore] = useState<number>(0) */
    let score: number = 0
    document.addEventListener("keydown", (e)=>{
        if(e.keyCode == 32){
            Jump()
        }
    });
    function addScoreFunction(){
        const showScore = document.getElementById('score')!;
        score += 1
        console.log(score)
        showScore.innerText = 'Score: ' + score
    }

    function generateObstacles(){

        const grid = document.querySelector<HTMLElement>('.grid')!;
        const dino = document.querySelector<HTMLElement>('.dino')!;
        let randomTime = Math.random() * 4000;
        let obstaclePosition = window.innerWidth - 100;
        let position
        
        let timerMove = setInterval(()=>{
            position = dino.style.bottom;
        if(obstaclePosition > 100 && obstaclePosition < 300){

            if(position == '160px' || position == '140px' || position == '120px' || position == '80px'){
                console.log("KROOOOOCK")
                setIsGameOver(true)
                clearInterval(timerMove);
                return
            }
        }
        if(obstaclePosition <= 0){
            addScoreFunction();
            clearInterval(timerMove)
            generateObstacles();
            return
        }
        const obstacle = document.querySelector<HTMLElement>('.obstacle')!;
        obstaclePosition -=10
        obstacle.style.left = obstaclePosition + 'px';
        /* console.log(obstaclePosition) */
        },18)
        return(
            <div className="obstacle" style={{
                position: 'absolute',
                height: '100px',
                width: "100px",
                backgroundColor: "orange",
                bottom: '80px',
            }}></div>
        );

    }
   
   

    
    return(
        <div className="grid" style={{
            height: '90vh',
            width: "100%",
            backgroundImage: `url(${props.background.backgroundImage})`,
            backgroundSize: 'cover',
            objectFit: 'contain',
            
             }}>
            {
                isGameOver ? (
                <button onClick={() => setIsGameOver(false)}>Start</button>

                ) : <Dino jumpHeight={jumpHeight}/>
            }
            
        </div>
    );
}

export default Gameboard;



