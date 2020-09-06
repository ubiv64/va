import React from 'react';

import Theme from './Theme.js';

import '../styles/Main.css';

function Main() {

  return(
    <div>
      <p className="name"> Vibu Anbarasan </p>
      <p className="about"> full stack dev with experience in writing service-oriented APIs and serverless frontend web applications. </p>
      <Theme />
    </div>
  )

}

export default Main