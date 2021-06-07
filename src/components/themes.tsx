import * as React from 'react';
import desert from './images/desert.png'
import candyland from './images/candyland.png'
import djungle from './images/djungle.png'
import { useState } from 'react'
import { url } from 'inspector';



const options = [{
    id: 1,
    label: "Default",
    value: "default",
},
{
    id: 2,
    label: "Candyland",
    value: "candyland",
    backgroundImage: "./images/candyland.png",
}, 
{
    id: 3,
    label: "Desert",
    value: "desert",
    backgroundImage: "./images/desert.png",
},
{
    id: 4,
    label: "Djungle",
    value: "djungle",
    backgroundImage: "./images/djungle.png",

}]

class ThemeOfChoice extends React.Component {
  render() {
    return (
      <div className= "span">
        <div>
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default ThemeOfChoice;






 
