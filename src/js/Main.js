import React, { Component } from 'react';
import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {
  render() {
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
