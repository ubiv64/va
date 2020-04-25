import React, { Component } from 'react';

import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {

  random() {
    let random = new Array(12).fill(null).map(() =>
      Math.floor(Math.random() * Math.floor(175))
    )

    let finalRandom = new Set(random)

    return finalRandom.size != random.length ? this.random() : random
  }

  render() {

    const random = this.random()

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
