$ = jQuery = require('jquery'); // two ways to reference jQuery

var React = require('react'),
    Home = require('./components/homePage.jsx'),
    About = require('./components/about/aboutPage.jsx'),
    ReactDOM = require('react-dom');

(function(win) {
    "use strict";
    var App = React.createClass({
       render:function() {
           var Child;
           switch(this.props.route) {
               case 'about':
                   Child = About;
                   break;
               default: Child = Home;
           }
           return(
            <div>
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