import React from 'react'
import trex from './../assets/trexlarge.jpg';
import { Link } from "react-router-dom";

export const MediaComponent = () => {
    const themeSong = require('../assets/themeSong.mp3')

    return (
        <>
            <div>
                <img src={ trex } alt="" style={ styleMedia }/>
            </div>   
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
            <audio autoPlay loop controls style={ styleMedia }>
                <source src= {themeSong} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </>
    )
}

const styleMedia: React.CSSProperties = {
    margin: '20px',
    borderRadius: 20
}
const noLine: React.CSSProperties = {
    textDecoration: 'none',
}
