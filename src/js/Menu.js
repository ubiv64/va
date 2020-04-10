import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RecentsGrid from './RecentsGrid.js'

export default function Menu() {
  return (
    <Router>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/">recents</Link>
            </li>
            <li>
              <Link to="/work">work</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Recents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Work() {
  return (
  	<div>
  	<h2>work</h2>
  	<h3>vibu anbarasan</h3>
  	</div>
  );
}

function Contact() {
  return <h2>contact</h2>
}

function Recents() {
  //pass images from Main as part of Menu's props

  return (
  		<h2>recents</h2>,
      <RecentsGrid />
  );
}