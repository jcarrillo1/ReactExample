$ = jQuery = require('jquery'); // two ways to reference jQuery

var React = require('react'),
    Home = require('./components/homePage.jsx'),
    Authors = require('./components/authors/authorPage.jsx'),
    About = require('./components/about/aboutPage.jsx'),
    ReactDOM = require('react-dom'),
    Header = require('./components/common/header.jsx');

// The following allows the use of use strict. Need to ask when use strict might be used
// If at all in our instances and why it would be used in the first place, as well as
// Why iife would be used. 
(function(win) {
    "use strict";
    // App demonstrates the use of routing
    // However, there seems to be a different method employed on the 
    // Atlas files for routing, however, react-route is still used. 
    var App = React.createClass({
       render:function() {
           var Child;
           switch(this.props.route) {
               case 'authors': 
                   Child = Authors;
                   break;
               case 'about':
                   Child = About;
                   break;
               default: 
                   Child = Home;
           }
           return(
            <div>
               <Header/>
               <Child/>
            </div>
           );
       } 
    });

    function render() {
        var route = win.location.hash.substr(1);
        ReactDOM.render(<App route = {route}/>, document.getElementById('app'));
    }

    //On hash change, render needs to occur
    win.addEventListener('hashchange', render);
    render();
})(window);