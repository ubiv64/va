import React, { Component } from 'react';

import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {
  render() {

    //generate RecentsGrid here and pass it as a constant to menu item so it doesn't regenerate

    return (
      <div>
      <div className="header">
      </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Main
