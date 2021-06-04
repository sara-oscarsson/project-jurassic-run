import React from 'react';
import Jump from './jumpFunction';

const Gameboard = () =>{
    /* HA KVAR SÅ LÄNGE, FUNKAR */
    /* const grid = document.querySelector('.grid');
    const dino = document.querySelector('.dino');
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;
    let position = 0 */
    
  /*   function jump(e: Event){      
        const dino = document.querySelector<HTMLElement>('.dino')!;
        if(isJumping === true){
            return
        }
        let timerId = setInterval(() => {
            if(position ===  200){
                console.log("down")
                clearInterval(timerId)
                let downTimerId = setInterval(() =>{
                    if(position === 0){
                        isJumping = false;
                        clearInterval(downTimerId)
                        return
                    }
                    position -= 20
                    
                    dino.style.bottom = position + 'px'
    
                },20)
            }
            isJumping = true;
            console.log("jump")
            position += 20
            dino.style.bottom = position + 'px'
        },20)
    } */
    document.addEventListener("keydown", Jump);

    
    return(
        <>
        <div className="dino" style={{
        height: '100px',
        width: "100px",
        backgroundColor: "blue",
        bottom: `100px`,
        position: "absolute",
        left: "200px" }}>

        </div>
        {/* <button onClick={test}>Hej</button> */}
        </>
    );
}

export default Gameboard;


