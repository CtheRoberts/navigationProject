import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
    constructor () {
        super();
        this.state = {
            show: false
        }
    }

    render () {
        return (
            <div className='navBar'>
                <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                <NavLink exact to="/about-me" activeClassName="nav-link-active">About</NavLink>
                <NavLink exact to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                <NavLink exact to="/articles" activeClassName="nav-link-active">Articles</NavLink>
                {this.state.show ? <button>Add Blog</button> : null}
            </div>
        );
    }
}