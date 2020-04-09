import React, { Component } from 'react';
import * as loadImage from 'blueimp-load-image';

import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {
  render() {

    //generate RecentsGrid here and pass it as a constant to menu item so it doesn't regenerate

    // loadImage(
    //   image, 
    //   (img) => {
    //     document.body.appendChild(img)
    //   },
    //   { 
    //     orientation: 6,
    //     maxWidth: 300
    //   }
    // );

    return (
      <div>
      <div className="header">
      </div>
        <div className="menu">
          <Menu />
            <div className="container">
            </div>
        </div>
      </div>
    );
  }
}

export default Main
