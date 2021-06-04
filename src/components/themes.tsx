import * as React from 'react';
import desert from './images/desert.png'
import candyland from './images/candyland.png'
import djungle from './images/djungle.png'
import { useState } from 'react'
import { url } from 'inspector';



const options = [{
    label: "Djungle",
    value: "djungle",
},
{
    label: "Candyland",
    value: "candyland",
}, 
{
    label: "Desert",
    value: "desert",
},
{
    label: "Default",
    value: "default",
}]

interface Props {
    value: string,
    onChange: (value: string) => void;
}


class App extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      theme: "djungle",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Theme Selected!!");
    this.setState({ theme: e.target.value });
  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <select value={this.state.theme} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default App;




 
