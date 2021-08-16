import React from 'react'
import { Script } from 'vm'

require('./../assets/themeSong.mp3')

export const MediaComponent = () => {



    return (
        <>
            <audio>
                <source src= './../assets/themeSong.mp3' type="audio/mp3"></source>
            </audio>
        </>
    )
}
