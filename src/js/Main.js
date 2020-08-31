import React from 'react';

import Theme from './Theme.js';

// import Menu from './Menu.js'

import '../styles/Main.css';

function Main() {

  return(
    <div>
      <h2> Vibu Anbarasan </h2>
      <h4> full stack dev with experience in writing service-oriented APIs and serverless frontend web applications. </h4>
      <Theme />
      <a className="email" href="mailto:vibu.anbarasan.64@gmail.com">Email</a>
    </div>
  )

}

export default Main

// <li><a clasName="email" href="mailto:vibu.anbarasan.64@gmail.com">Email</a></li>