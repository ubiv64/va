import React, { Component } from 'react';

import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {
  render() {

    //generate random numbers and pass it to menu

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
