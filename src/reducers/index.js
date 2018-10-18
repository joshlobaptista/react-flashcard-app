// REDUCERS GOAL. to compose an object that represents how it update its state.
// reducer itself will be a function that dynamically creates the stack object.
// each reducer in redux takes two parameters 
// the first parameter represents the incoming and present state of redux
import { combineReducers } from 'redux';
import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';

//receiving a set stack action type and returning that it gets in the action
function stack(state = {}, action) {
  switch (action.type) {
		case SET_STACK:
			return action.stack;
		default:
			return state;
	}
}

//receiving a load stacks action type, returning the stacks that we find in the action
function stacks(state= [], action) {
	switch(action.type) {
		case LOAD_STACKS:
			return action.stacks;
		case ADD_STACK:
			return [...state, {...action.stack, id: state.length }];
		default:
			return state;
	}
}

export default combineReducers({ stack, stacks });