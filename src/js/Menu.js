import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
              <Link to="/feed">feed</Link>
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
          <Route path="/feed">
            <Feed />
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

function Feed() {
  return <h2>feed</h2>;
}

function Recents() {
  return (
  	<div>
  		<h2>recents</h2>
  		<RecentsGrid />
  	</div>
  );
}