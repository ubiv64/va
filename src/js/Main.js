import React, { Component } from 'react';

import Menu from './Menu';

import '../styles/Main.css';

class Main extends Component {

  random() {
    let random = new Array(12).fill(null).map(() =>
      Math.floor(Math.random() * Math.floor(175))
    )

    let finalRandom = new Set(random)

    return finalRandom.size !== random.length ? this.random() : random
  }

  render() {

    const work = 
      <div>
        <p> 
        vibu anbarasan
        </p>
        <p> 
        <a href="https://github.com/ubiv64">sofware engineer</a>
        </p>
        <p> 
        based out of Dallas, TX
        </p>
      </div>

    const contact = 
      <div>
        <p> 
        vibu anbarasan
        </p>
        <p> 
        <a href="mailto:vibu@live.com">email</a>
        </p>
        <p> 
        <a href="https://instagram.com/ubiv">instagram</a>
        </p>
      </div>

    const menu = {
      random: this.random(),
      work: work,
      contact: contact
    }

    return (
      <div>
      <div className="header">
      </div>
        <div className="menu">
          <Menu menu={menu} />
        </div>
      </div>
    );
  }
}

export default Main
