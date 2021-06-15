import * as React from 'react';

import desert from './../assets/desert.png'
import candyland from './../assets/candyland.png'
import djungle from './../assets/djungle.png' 
import mainpic from './../assets/2.jpg'

export interface Theme {
    id: number,
    label: string,
    value: string,
    backgroundImage: string
}



export const Options: Theme[] = [{
      id: 0,
      label: "Choose Theme",
      value: "default",
      backgroundImage: djungle
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
      label: "Grass",
      value: "djungle",
      backgroundImage: mainpic
  }]