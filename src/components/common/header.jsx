"use strict";

var React = require('react');

// This will be the navigation bar for the app
var Header = React.createClass({
    render: function() {
        return(
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <a href='/' className = 'navbar-brand'>
                        <img src='images/topleft.png' />
                    </a>
                    <ul className='nav navbar-nav'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#about'>About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;