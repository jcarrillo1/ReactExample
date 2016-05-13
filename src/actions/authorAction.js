"use strict";

var Dispatcher = require('../dispatcher/appDispatcher'),
	AuthorApi = require('../api/authorApi'),
	ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function(author) {
		// Would probably be using something to get ajax calls right here
		var newAuthor = AuthorApi.saveAuthor(author);
		
		//Dispatcher will tell all the stores that an author was just created
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},
    
    updateAuthor: function(author) {
		// Would probably be using something to get ajax calls right here
		var updatedAuthor = AuthorApi.saveAuthor(author);
		
		//Dispatcher will tell all the stores that an author was just created
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},
    
    deleteAuthor: function(id) {
        //debugger;
        AuthorApi.deleteAuthor(id);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;