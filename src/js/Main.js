import Slider from './Slider';

import React, { Component } from 'react';
import '../styles/Main.css';

class Main extends Component {
  render() {

    var array = ["steph","kd","klay"];

    return (
      <div>
      <div className="header">
        <header>
        <h1> proto </h1>
        </header>
      </div>
        <div className="body">
          <p> proto dot com </p>
        </div>
        <div className="slider">
          <Slider array={array} />
        </div>
      </div>
    );
  }
}

export default Main
