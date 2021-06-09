import * as React from 'react';
import { CSSProperties } from 'react';
import desert from './images/desert.png'
import candyland from './images/candyland.png'
import djungle from './images/djungle.png' 
 import mainpic from './images/2.jpg'
import { useState } from 'react';
import { url } from 'inspector';
import { Select } from '@material-ui/core';
import '../index.css'

import { fileURLToPath } from 'url';
export interface Theme {
    id: number,
    label: string,
    value: string,
    backgroundImage: string
}

interface Props {
  setBackground: (theme: Theme) => void
}


export const options: Theme[] = [{
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

export default function ChooseTheme(props: Props) {
    
    //  const [background, setBackground]=useState("default")

    function newBackground(id: string) {
      let index = Number(id)
      props.setBackground(options[index - 1]) /* Byt ut till en find-funktion */

    }
    
    return (
    <div className= "span">
        <div>
            <select onChange={(e) => newBackground(e.target.value)}>
              {options.map((option) => (
                <option value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }