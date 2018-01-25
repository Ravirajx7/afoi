import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase.js';
import './App.css';

class SignIn extends Component {
	constructor (props) {
		super (props);
		this.state = {
			email : '',
			password : '',
			error : {
				message : ''
			}
		}
	}

	signIn () {
		console.log ('this.state', this.state);
		const { email, password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email,password)
		.catch (error => {
			console.log ('error', error);
			this.setState({error});
		})
	}

	render () {
		return (
			<div className = "form-inline">
				<h2>Sign In</h2>
				<div className = "FormGroup">
					<input className = "FormControl" type = "text" placeholder = "email" onChange = {event => this.setState ({email : event.target.value})} /><br />
					<input className = "FormControl" type = "password" placeholder = "password" onChange = {event => this.setState ({password : event.target.value})} /><br />
					<button className = "butt" type = "Button" onClick = {() => this.signIn()}>SignIn</button>
				</div>
				<div>
					{this.state.error.message}
				</div>
				<div><Link to={'/signup'}>Sign Up Instead</Link></div>
			</div>
		)
	}
}

export default SignIn;