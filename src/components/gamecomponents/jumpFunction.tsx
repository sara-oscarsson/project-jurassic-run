import { exit } from 'process';
import * as React from 'react';
import { disposeEmitNodes } from 'typescript';

const  Jump = () =>{
    let isJumping: boolean = false;
    let gravity = 0.9;
    let isGameOver = false;
    let position = 0

    const dino = document.querySelector<HTMLElement>('.dino')!;
    
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
        console.log("up")
        position += 20
        dino.style.bottom = position + 'px'
    },20)
}

export default Jump;