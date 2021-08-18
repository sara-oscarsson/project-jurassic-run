import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function FunFact(){
    const [funFact, setFunFact] = useState<string>("The word dinosaur comes from the Greek language and means ‘terrible lizard’. They were called this because of their huge size, not because they were particularly terrible!")
    interface funFactOptions {
        text: string
    }
    
    const Options: funFactOptions[] = [{
        text: 'The dinosaur with the longest name was the Micropachycephalosaurus, which means tiny, thick headed lizard!'
    },
    {
        text: 'Most dinosaurs had very small brains and were about as clever as modern reptiles.'
    
    }, 
    {
        text: 'Although they’re known for being massive monsters, many dinosaurs were actually smaller than a turkey'
    
    },
    {
        text: 'The very biggest dinosaurs ate only plants. Those that ate meat were usually much smaller.'
    
    },
    {
        text: 'For their own protection, most plant-eating dinosaurs grew natural weapons like spikes and horns.'
    
    }]
    function showFunFact(){
        let index: number = Math.floor(Math.random() * 5);
        console.log(index)
        setFunFact(Options[index].text)
        alert(funFact)
    }
    return(
        <div style={ flexRow }>
            <Link to="/gameboard" style={ noLine }>
                <button
                style={{
                    backgroundColor: 'green',
                    borderRadius: '15px',
                    border:'1px solid white',
                    display:'inline-block',
                    cursor: 'pointer',
                    fontWeight: 1000,
                    color:'white',
                    fontSize: '40px',
                    padding: '10px',
                    textDecoration: 'none',
                    textShadow:'0px 1px 0px #2f6627',
                    margin: '5px',
                }}
                className='jurassicFont'>
                JUMP NOW
                </button>
            </Link>
            <button style={{
                backgroundColor: 'green',
                borderRadius: '15px',
                border:'1px solid white',
                display:'inline-block',
                cursor: 'pointer',
                fontWeight: 1000,
                color:'white',
                fontSize: '40px',
                padding: '10px',
                textDecoration: 'none',
                textShadow:'0px 1px 0px #2f6627',
                margin: '5px',
            }} 
            onClick={showFunFact}
            className='jurassicFont'>
                Fun fact
            </button>
        </div>
    );
}

const noLine: React.CSSProperties = {
    textDecoration: 'none',
}

const flexRow: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}