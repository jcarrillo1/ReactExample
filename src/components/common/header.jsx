"use strict";

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

// This will be the navigation bar for the app
var Header = React.createClass({
    render: function() {
        return(
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <ul className='nav navbar-nav'>
                        <li><Link to='app'>Home</Link></li>
                        <li><Link to='authors'>Authors</Link></li>
                        <li><Link to='about'>About</Link></li>

                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
