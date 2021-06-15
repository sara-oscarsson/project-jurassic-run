import * as React from 'react';
import { CSSProperties } from 'react';
import { useState } from 'react';
import { url } from 'inspector';
import { Select } from '@material-ui/core';
import '../index.css'
import { Options } from './themeArray';
import { Theme } from './themeArray';


interface Props {
  setBackground: (theme: Theme) => void
}


export default function ChooseTheme(props: Props) {
  
    function newBackground(id: string) {
      let index = Number(id)
      console.log(id)
      props.setBackground(Options[index])
    }
    
    return (
    <div className= "span">
        <div>
            <select style={{
              fontSize: 30,
              color: "rgb(37, 82, 43)",
              backgroundColor: "white",
              height: 35,
              width: 130,
              borderRadius: 8,
            }} onChange={(e) => newBackground(e.target.value)}>
              {Options.map((option) => (
                <option value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }