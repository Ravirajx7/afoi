import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { browserHistory, Router } from 'react-router';
import { firebaseApp } from './firebase.js';
import reducer from './reducers/';
import { logUser } from './actions/index.js';

import App from './components/App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import About from './components/About.jsx';
import News from './components/News.jsx';
import Contact from './components/Contact.jsx';
import SignOut from './components/SignOut.jsx';

const store = createStore (reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log ('user has signed in or up', user);
		const { email } = user;
		store.dispatch(logUser(email));
	} else {
		console.log ('user has signed out or still user needs to sign in');
	}
})

ReactDOM.render (
	<Provider store = {store}>
		<BrowserRouter>
		<div>
				<Route path = "/app" component = {App} />
				<Route path = "/signin" component = {SignIn} />
				<Route path = "/signup" component = {SignUp} />
				<Route path = "/about" component = {About} />
				<Route path = "/news" component = {News} />
				<Route path = "/contact" component = {Contact} />
				<Route path = "/signout" component = {SignOut} />
		</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById ('root')
	);
