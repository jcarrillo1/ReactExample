"use strict";

var React = require('react'),
    Router = require('react-router'),
    AuthorForm = require('./authorForm.jsx'),
    AuthorActions = require('../../actions/authorAction'),
    AuthorStore = require('../../stores/authorStore'),
    toastr = require('toastr');

// Home page
var AddAuthors = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && ! confirm('Leave w/o saving?')) {
                transition.abort();
            }
        }
    },
    getInitialState: function() {
        return{
            author: {
                id: '',
                firstName: '',
                lastName: ''

            },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function() {
        var authorId = this.props.params.id; //From the path, the author id
        if(authorId) {
            //Get the author from the url and use the information
            this.setState({author:AuthorStore.getAuthorById(authorId)});
        }

    },

    setAuthorState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author:this.state.author});
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 2) {
            formIsValid = false;
            this.state.errors.firstName = 'First name is less than 2 characters.';
        }
        if(this.state.author.lastName.length < 2) {
            formIsValid = false;
            this.state.errors.lastName = 'Last Name is less than 2 characters.';
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function(e) {
        e.preventDefault();

        if(!this.authorFormIsValid()) {
            return;
        }
        
        if(this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }
        
        this.setState({dirty: false});
        toastr.success('Author has been saved');
        this.transitionTo('authors');
    },

    render: function() {
        return(

            <div>
                <AuthorForm
                    author={this.state.author}
                    onChange = {this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors = {this.state.errors}/>
            </div>
        );
    }
});

module.exports = AddAuthors;
