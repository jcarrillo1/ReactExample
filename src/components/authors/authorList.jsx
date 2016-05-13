"use strict";

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    AuthorActions = require('../../actions/authorAction'),
    toastr = require('toastr');

var AuthorList = React.createClass({
    propTypes: {
        authors : React.PropTypes.array.isRequired
    },

    deleteAuthor: function(id, event) {
        event.preventDefault();
        //debugger;
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted just for you');
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td><Link to='manageAuthor' params= {{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return (
            <div>
                <table className='table'>
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {/* Expecting authors to be passed down to it*/}
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;
