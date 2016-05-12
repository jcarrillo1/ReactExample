var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function() {
        return(
            // Uses jumbotron to display the current text.
            <div className="jumbotron">
                <h1>Page not found</h1>
                <p>Sorry, looks like you took a wrong turn!</p>
                <Link to='app' className='btn btn-primary btn=lg'>Let's go back home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;
