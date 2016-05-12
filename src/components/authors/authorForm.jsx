"use strict";

var React = require('react'),
    Input = require('../common/Input.jsx');

var AuthorForm = React.createClass({


    render: function() {
        return(

            <form>
                <h1>Managing Authors</h1>
                <Input
                    name='firstName'
                    label='First Name'
                    onChange = {this.props.onChange}
                    value= {this.props.author.firstName} />
                <Input
                    name='lastName'
                    label = 'Last Name'
                    onChange ={this.props.onChange}
                    value={this.props.author.lastName} />

                <input type='submit' value='Save' className='btn btn-default' />
            </form>
        );
    }
});

module.exports = AuthorForm;
