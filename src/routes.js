"use strict";

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app.jsx')}>
    <DefaultRoute handler={require('./components/homePage.jsx')} />
    <Route name="authors" handler={require('./components/authors/authorPage.jsx')} />
    <Route name="addAuthor" path='author' handler={require('./components/authors/manageAuthorsPage.jsx')} />
    <Route name="about" handler={require('./components/about/aboutPage.jsx')} />
    <NotFoundRoute handler = {require('./components/notFoundPage.jsx')} />
    <Redirect from='about/*' to='about'/>
  </Route>
);
module.exports = routes;
