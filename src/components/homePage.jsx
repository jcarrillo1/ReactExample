"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return(
            <div className="jumbotron">
                <h1>React Example</h1>
                <p>Using react, reac router, and flux. </p>
            </div>
        );
    }
});

module.exports = Home;