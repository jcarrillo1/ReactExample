"use strict";
/**********************************
*
*   This is the basic pattern for 
*   flux apps.
*
***********************************/
var Dispatcher = require('../dispatcher/appDispatcher'),
	ActionTypes = require('../constants/actionTypes'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign'),
	_ = require('lodash');

// private authors variable
// Only way to access it is with AuthorStore
var _authors = [];

//Pass in an empty object, extend that object to utilize an event emitter,
//Then define the store after
var AuthorStore = assign({}, EventEmitter.prototype, {
	//I would like to know when this store changes
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChageListener: function(callback) {
		this.removeListener('change', callback);
	},
	emitChange: function() {
		this.emit('change');
	},

	getAllAuthors: function(){
		return _authors;
	},

	getAuthorById: function(id) {
		return _.find(_authors, {id: id});
	}
})

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.CREATE_AUTHOR:
			_authors.push(action.author);
			AuthorStore.emitChange();
			break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, {id: action.author.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(author) {
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
        default:
            //nothing
            break;
	};
});

module.exports = AuthorStore;