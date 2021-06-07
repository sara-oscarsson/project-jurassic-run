import * as React from 'react';
import { CSSProperties } from 'react';
import desert from './images/desert.png'
import candyland from './images/candyland.png'
import djungle from './images/djungle.png' 
 import mainpic from './images/2.jpg'
import { useState } from 'react';
import { url } from 'inspector';
import { Select } from '@material-ui/core';

interface Theme {
    id: number,
    label: string,
    value: string,
    backgroundImage: string
}

export default function ChooseTheme() {
    
    const options: Theme[] = [{
        id: 1,
        label: "Default",
        value: "default",
        backgroundImage: "./images/2.jpg"
    },
    {
        id: 2,
        label: "Candyland",
        value: "candyland",
        backgroundImage: "./images/candyland.png"

    }, 
    {
        id: 3,
        label: "Desert",
        value: "desert",
        backgroundImage: "./images/desert.png"

    },
    {
        id: 4,
        label: "Djungle",
        value: "djungle",
        backgroundImage: "./images/djungle.png"

    }]

    
    const [background, setBackground]=useState("default")

    function newBackground(id: string) {
        
        setBackground(id) /* Byt ut till en find-funktion */

    }
    
    return (
    <div>
        <style>{background}</style>
        <div>
            <select onChange={(e) => newBackground(e.target.value)}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    










 
