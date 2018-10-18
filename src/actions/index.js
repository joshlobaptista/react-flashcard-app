//declare a new action constant set to an empty object
// In redux all action objects have a type. so you make a type key.
//the type is used to identify the action so our reducer knows how to handle it.
// for types its conventional to use a string
//or use string case.


//so other files can use this action creater lets export it as a shared function
export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const ADD_STACK = 'ADD_STACK';

export function setStack(stack) {
	return {
		type: 'SET_STACK',
		stack: stack
	};
} 

export function loadStacks(stacks) {
	return {
		type: LOAD_STACKS,
		stacks
	}
}

export function addStack(stack) {
	return {
		type: ADD_STACK,
		stack
	}
}