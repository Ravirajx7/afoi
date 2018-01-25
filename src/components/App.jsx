import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase.js';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
	signOut () {
		firebaseApp.auth().signOut();
	}
	render () {
		return (
			<div className ="">
			<h1 className = "header">Archival Footages of India Application</h1><br />
				<div>
					<nav>
						<ul className = "topnav">
							<li><b><Link to='/app'>Home</Link></b></li>
							<li><b>News</b></li>
							<li><b><Link to='./About'>About</Link></b></li>
							<li><b>Contact</b></li>
							<li className="topnav-right"><b><Link to='/signin'>Sign In</Link></b></li>
							<li className="topnav-right"><b>Sign Out</b></li>
						</ul>
					</nav>
				</div>
				<button className = "butt" onClick = {() => this.signOut()} >
					Sign Out
				</button>
			</div>
		);
	}
}

function mapStateToProps (state) {
	console.log ('state', state);
	return {}
}

export default connect(mapStateToProps, null)(App);
