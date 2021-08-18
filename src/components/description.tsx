import React from 'react'
import trex from './../assets/trexlarge.jpg';

export const Description = () => {
    return (
        <div style={ styleWidth }>
            <article>
                The game where all dinosaurs can fulfill their dream of jumping over stuff.
            </article>
            <div style={ imgWrapper }>
                <img src={ trex } alt="" style={ styleMedia }/>
            </div> 
        </div>
    )
}

const styleMedia: React.CSSProperties = {
    margin: '20px',
    borderRadius: 20,
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
}

const styleWidth: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const imgWrapper: React.CSSProperties = {
    width: '50%'
}