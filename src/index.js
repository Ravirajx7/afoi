import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { browserHistory, Router } from 'react-router';
import { firebaseApp } from './firebase.js';

import App from './components/App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log ('user has signed in or up', user);
	} else {
		console.log ('user has signed out or still user needs to sign in');
	}
})

ReactDOM.render (
		<BrowserRouter>
		<div>
				<Route path = "/app" component = {App} />
				<Route path = "/signin" component = {SignIn} />
				<Route path = "/signup" component = {SignUp} />
		</div>
		</BrowserRouter>,
		document.getElementById ('root')
	);
