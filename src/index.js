import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import { setStack } from './actions';
import './index.css';


// render in the app by using it as JSX
//look at the document that is the variable which is the javascript representation of the dom. get the element by its ID and find it by the ID of root.
//The BrowserRouter will have children so you'll need a set of tags.
const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }))
//When you go to the / end point on the application, render the App components
//Path and component contain attributes
ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/stack' component={Stack} />
				<Route path='/stack_form' component={StackForm} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);