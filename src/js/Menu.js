import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import RecentsGrid from './RecentsGrid.js'

import '../styles/Menu.css'

class Menu extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <Router>
          <div className="nav">
          <NavLink exact to="/" activeClassName="active" className="inactive">recents</NavLink>
          <NavLink to="/work" activeClassName="active" className="inactive">work</NavLink>
          <NavLink to="/contact" activeClassName="active" className="inactive">contact</NavLink>
          </div>
          <Switch>
            <Route exact path="/">
              <RecentsGrid />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default Menu

// <Route path="/work">
// </Route>
// <Route path="/contact">
// </Route>