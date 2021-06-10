import { exit } from 'process';
import * as React from 'react';
import { disposeEmitNodes } from 'typescript';

const  Jump = () =>{
    let isJumping = false
    let position = 80

    const dino = document.querySelector<HTMLElement>('.dino')!;
    if(isJumping){
        return
    }
    let timerId = setInterval(() => {
        if(position ===  340){
           /*  console.log("down") */
            clearInterval(timerId)
            let downTimerId = setInterval(() =>{
                if(position === 80){
                    isJumping = false;
                    clearInterval(downTimerId)
                    return
                }
                position -= 20
                
                dino.style.bottom = position + 'px'

            },40)
        }
        isJumping = true;
        /* console.log("up") */
        position += 20
        dino.style.bottom = position + 'px'
    },20)
}

export default Jump;