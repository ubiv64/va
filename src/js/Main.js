import React, { Component } from 'react';

import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {
  render() {

    const random = new Array(12).fill(null).map(() =>
      Math.floor(Math.random() * Math.floor(175))
    )

    return (
      <div>
      <div className="header">
      </div>
        <div className="menu">
          <Menu random={random} />
        </div>
      </div>
    );
  }
}

export default Main
