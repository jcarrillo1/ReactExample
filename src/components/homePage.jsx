"use strict";

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

// Home page
var Home = React.createClass({
    render: function() {
        return(
            // Uses jumbotron to display the current text.
            <div className="jumbotron">
                <h1>React Example</h1>
                <p>Using react, reac router, and flux. </p>
                <Link to='about' className='btn btn-primary btn=lg'>Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;
