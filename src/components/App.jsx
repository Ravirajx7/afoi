import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from '../firebase.js';
import { Route } from 'react-router-dom';

class App extends Component {
	signOut () {
		firebaseApp.auth().signOut();
	}
	render () {
		return (
			<div>
			App<br />
			<button className = "butt" onClick = {() => this.signOut()} >
				Sign Out
			</button>
			</div>
		);
	}
}

export default App;
