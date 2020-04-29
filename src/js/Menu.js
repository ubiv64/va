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
          <NavLink exact to="/work" activeClassName="active" className="inactive">work</NavLink>
          <NavLink exact to="/contact" activeClassName="active" className="inactive">contact</NavLink>
          </div>
          <Switch>
            <Route exact path="/">
              <RecentsGrid random={this.props.menu.random} />
            </Route>
            <Route exact path="/work">
              <div className="work">
              {this.props.menu.work}
              </div>
            </Route>
            <Route exact path="/contact">
              <div className="contact">
              {this.props.menu.contact}
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default Menu

// <Route exact path="/contact">
//   <div className="contact">
//   {this.props.menu.contact}
//   </div>
// </Route>  