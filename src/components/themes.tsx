import * as React from 'react';
import { CSSProperties } from 'react';
import desert from './../assets/desert.png'
import candyland from './../assets/candyland.png'
import djungle from './../assets/djungle.png' 
import mainpic from './../assets/2.jpg'
import { useState } from 'react';
import { url } from 'inspector';
import { Select } from '@material-ui/core';
import '../index.css'
import { Options } from './themeArray';
import { Theme } from './themeArray';


import { fileURLToPath } from 'url';
/* export interface Theme {
    id: number,
    label: string,
    value: string,
    backgroundImage: string
} */

interface Props {
  setBackground: (theme: Theme) => void
}




/* export const options: Theme[] = [{
      id: 0,
      label: "Default",
      value: "default",
      backgroundImage: mainpic
  },
  {
      id: 1,
      label: "Candyland",
      value: "candyland",
      backgroundImage: candyland

  }, 
  {
      id: 2,
      label: "Desert",
      value: "desert",
      backgroundImage: desert

  },
  {
      id: 3,
      label: "Djungle",
      value: "djungle",
      backgroundImage: djungle
  }] */


export default function ChooseTheme(props: Props) {
    
    //  const [background, setBackground]=useState("default")

    function newBackground(id: string) {
      let index = Number(id)
      console.log(id)
      props.setBackground(Options[index])
      /* props.setBackground(options[index - 1]) */

    }
    
    return (
    <div className= "span">
        <div>
            <select onChange={(e) => newBackground(e.target.value)}>
              {Options.map((option) => (
                <option value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }