"use strict";

var React = require('react'),
    Input = require('../common/Input.jsx');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        error: React.PropTypes.object
    },

    render: function() {
        return(

            <form>
                <h1>Managing Authors</h1>
                <Input
                    name='firstName'
                    label='First Name'
                    onChange = {this.props.onChange}
                    value= {this.props.author.firstName}
                    errors= {this.props.errors.firstName}/>
                <Input
                    name='lastName'
                    label = 'Last Name'
                    onChange ={this.props.onChange}
                    value={this.props.author.lastName}
                    errors = {this.props.errors.lastName}/>

                <input
                    type='submit'
                    value='Save'
                    className='btn btn-default'
                    onClick= {this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;
