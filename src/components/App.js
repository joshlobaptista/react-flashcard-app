// importing the react library and importing the component class from react.
import React, { Component } from 'react';
import StackList from './StackList';
import { Link } from 'react-router-dom';

//create a App class that extends the component class from react.

class App extends Component {
	//run a render method that will return some JSX
	render() {
		return (
			<div>
				<h2>Flashcard pro</h2>
				<hr/>
				<StackList/>
				<hr />
				<Link to='stack_form'><h4>Create a New Stack</h4></Link>
			</div>	
		)
	}
}

// So other files can use this. we must Export the app component by default

export default App;