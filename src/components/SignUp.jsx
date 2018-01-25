import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { firebaseApp } from '../firebase.js';
import './App.css';

class SignUp extends Component {
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

	signUp () {
		console.log ('this.state', this.state);
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email,password)
		.catch (error => {
			console.log ('error', error);
			this.setState({error})
		})
	}

	render () {
		return (
			<div className = "form-inline">
				<h2>Sign Up</h2>
				<div className = "FormGroup">
					<input className = "FormControl" type = "text" placeholder = "email" onChange = {event => this.setState ({email : event.target.value})} /><br />
					<input className = "FormControl" type = "password" placeholder = "password" onChange = {event => this.setState ({password : event.target.value})} /><br />
					<button className = "butt" type = "Button" onClick = {() => this.signUp()}>Signup</button>
				</div>
				<div>
					{this.state.error.message}
				</div>
			</div>
		)
	}
}

export default SignUp;