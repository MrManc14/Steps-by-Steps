import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {

    render() {
        return(
            <header>
                <nav className="pages-nav">
                    <div className="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <div className="nav-menu">
                        <Link to="/tips">what you can do</Link>
                        <Link to="/why-this-matters">why this matters</Link>
                    </div>
                </nav>
            </header>
        )
    }
}