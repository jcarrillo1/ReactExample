"use strict";

var React = require('react'),
    AuthorApi = require('../../api/authorApi'),
    AuthorList = require('./authorList.jsx'),
    Router = require('react-router'),
    Link = Router.Link;

var AuthorPage = React.createClass({

    //define initial state of the component
    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentDidMount: function() {
        // Check if the component is mounted
        if(this.isMounted()) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
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
