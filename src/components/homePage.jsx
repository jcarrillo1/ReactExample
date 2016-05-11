"use strict";

var React = require('react');

// Home page
var Home = React.createClass({
    render: function() {
        return(
            // Uses jumbotron to display the current text. 
            <div className="jumbotron">
                <h1>React Example</h1>
                <p>Using react, reac router, and flux. </p>
            </div>
        );
    }
});

module.exports = Home;