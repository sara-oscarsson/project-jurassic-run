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
/* 

*/

export const options: Theme[] = [{
      id: 0,
      label: "Default",
      value: "default",
      backgroundImage: "/static/media/2.7d271b74.jpg"
  },
  {
      id: 1,
      label: "Candyland",
      value: "candyland",
      backgroundImage: "/static/media/candyland.02f96d98.png"

  }, 
  {
      id: 2,
      label: "Desert",
      value: "desert",
      backgroundImage: "/static/media/desert.498568f4.png"

  },
  {
      id: 3,
      label: "Djungle",
      value: "djungle",
      backgroundImage: "./static/media/djungle.fa38d68e.png"

  }]

export default function ChooseTheme(props: Props) {
    
    //  const [background, setBackground]=useState("default")

    function newBackground(id: string) {
      let index = Number(id)
      console.log(id)
      props.setBackground(options[index])
      /* props.setBackground(options[index - 1]) */

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