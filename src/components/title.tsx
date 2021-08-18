import React from 'react'
import '../index.css'

export const Title = () => {
    return (
        <div style={ styleWidth }>
            <h1 className='jurassic'>
                Welcome to Jurassic Jump!
            </h1>
        </div>
    )
}

const styleWidth: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5px',
    textAlign: 'center'
}
