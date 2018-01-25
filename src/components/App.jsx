import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase.js';
import { Route, Link } from 'react-router-dom';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './App.css';

class App extends Component {

	constructor (props) {
		super (props);
		this.state = {
			query : ''
		}
	}

	search () {
		console.log ('this.state', this.state);
		const BASE_URL = 'https://api.spotify.com/v1/search?';
		const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		console.log ('FETCH_URL', FETCH_URL);
	}

	signOut () {
		firebaseApp.auth().signOut();
	}
	render () {
		return (
			<div className ="">
			<h1 className = "header">Archival Footages of India</h1><br />
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
					<FormGroup className="MySearch">
						<InputGroup>
							<FormControl type = "text" placeholder = "search footages by year" value={this.state.query} onChange={event => {this.setState({query : event.target.value})}}
							onKeyPress={event => {
								if (event.key == 'Enter') {
									this.search ()
								}
							}} />
							<button onClick = {() => this.search()}>Search</button>
						</InputGroup>
					</FormGroup>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	console.log ('state', state);
	return {}
}

export default connect(mapStateToProps, null)(App);
