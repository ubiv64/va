import React from 'react';

import Theme from './Theme.js';

import '../styles/Main.css';

function Main() {

  return(
    <div>
      <p className="name"> Vibu Anbarasan </p>
      <p className="about"> full stack dev versed in design, writing single-page apps and service-oriented APIs. </p>
      {/* <p className="tags">
        <span style={{fontFamily: 'Helvetica', backgroundColor: '#24C643', color: 'white', fontSize: '.85em', borderRadius: '10px',}}>📍NYC{(window.innerWidth < 950) ? <span>&nbsp;</span> : <span>&emsp;</span>}</span>
      </p> */}
      <img className="tags" src={require(`../assets/nyc.svg`)} />
      <Theme />
    </div>
  )

}

export default Main