import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './signout.css';

class SignOut extends Component {

	signIn () {

	}

	render () {
		return (
			<div className = "tophead">
				<h1>Like to Visit Again!</h1>
				<div>
					<h2><b><Link to="/signin">Sign In</Link></b></h2>
				</div>
			</div>
		);
	}
}

export default SignOut;
