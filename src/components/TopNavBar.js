import React from 'react';
import logo from '../assets/images/nba-logoman-word-white.svg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <a href="https://stats.nba.com/"><img src={logo} className="App-logo" alt="logo"/></a>
            </header>
        )
    }
}