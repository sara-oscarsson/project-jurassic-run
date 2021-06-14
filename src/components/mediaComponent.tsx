import React from 'react'

const themeSong = require('../assets/themeSong.mp3')

export const MediaComponent = () => {



    return (
        <>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/zHalXjs0cDA" title="YouTube player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe> */}
            <div>
                Tryck in content här.
            </div>    
            <audio autoPlay loop controls>
                <source src= {themeSong} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </>
    )
}
