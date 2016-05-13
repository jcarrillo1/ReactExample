"use strict";

var React = require('react'),
    AuthorApi = require('../../api/authorApi'),
    AuthorList = require('./authorList.jsx'),
    Router = require('react-router'),
    AuthorActions = require('../../actions/authorAction'),
    AuthorStore = require('../../stores/authorStore'),
    Link = Router.Link;

var AuthorPage = React.createClass({

    //define initial state of the component
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    
    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AuthorStore.removeChageListener(this._onChange);
    },
    
    _onChange: function() {
        //debugger;
        this.setState({authors: AuthorStore.getAllAuthors()});
    },

    render: function() {

        return (
            <div>
                <h1>Authors</h1>
                <Link to='addAuthor' className='btn btn-primary btn=lg'>Add Authors</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;
