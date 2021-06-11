import { time } from 'console';
import React, { useState, useEffect } from 'react';
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
    const [isGameOver, setIsGameOver] = useState<boolean>(true)
    const [jumpHeight, setJumpHeight] = useState<number>(20)
    const [isJumping, setIsJumping] = useState<boolean>(false)
    
    /* const [score, setScore] = useState<number>(0) */
    let jumpSpeed = 20;
    let jumpTimer: NodeJS.Timeout;
    let fallTimer: NodeJS.Timeout;

    let left = document.querySelector<HTMLElement>('.grid')!;
    console.log(left)


    const dinoJumpNew = ()=> {
        /* if(jumpHeight == 80){
            let jumpTimer = setInterval(()=> {
                setJumpHeight(jumpHeight => jumpHeight +10)
            },30)
            return ()=> {
                clearInterval(jumpTimer)
            }
        } */
        if(jumpHeight == 20){
            setJumpHeight(jumpHeight=> jumpHeight + 200)

        }

    } 
    useEffect(()=> {
        if(jumpHeight > 20){
            let fallTimer = setInterval(()=> {
                setJumpHeight(jumpHeight => jumpHeight -10)
            },30)
            return ()=> {
                clearInterval(fallTimer)
            }
        }
    })
       
   
    return(
      /*   <div style={{display: "flex",
        justifyContent: "center",}}> */

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
                    
                    ) : <Dino jumpHeight={jumpHeight} makeDinoJump={dinoJumpNew}/>
                }
                
            </div>
       /*  </div> */
    );
}

export default Gameboard;



