import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Articles from './articles';
import Contact from './contact';
import About from './about';
import Home from './home';
import NavBar from './navBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="header">
          <h1>Navigation Project</h1>
          <h2>February 20 Homework</h2>
        </div>
        <div>
          <NavBar />
        </div>
        <Router>
        <div className='content'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/articles" component={Articles} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
