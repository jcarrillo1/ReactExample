 // two ways to reference jQuery
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes'),
    InitializeActions = require('./actions/initializeActions');

var moment = require("moment");

console.log(typeof moment().format("YYYY-MM-DD"))
//Could just take from the other file and paste it here
//He did it so it was cleaner
InitializeActions.initApp();

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
