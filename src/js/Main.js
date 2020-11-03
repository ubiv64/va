import React from 'react';

import Theme from './Theme.js';

import '../styles/Main.css';

function Main() {

  return(
    <div>
      <p className="name"> Vibu Anbarasan </p>
      <p className="about"> full stack dev versed in design, writing single-page apps and service-oriented APIs. </p>
      <Theme />
    </div>
  )

}

export default Main