import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
	auth,
	createUserProfileDocument
} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			displayName     : '',
			email           : '',
			password        : '',
			confirmPassword : ''
		};
	}
	handleSubmit = async (event) => {
		event.preventDefault();
		const {
			displayName,
			email,
			password,
			confirmPassword
		} = this.state;
		if (password !== confirmPassword) {
			alert("Password Don't match");
			return;
		}
		try {
			const {
				user
			} = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			await createUserProfileDocument(user, {
				displayName
			});
			//an use it to store username
			this.setState({
				displayName     : '',
				email           : '',
				password        : '',
				confirmPassword : ''
			});
		} catch (error) {
			console.log(error.message);
		}
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name] : value
		});
	};

	render() {
		const {
			displayName,
			email,
			password,
			confirmPassword
		} = this.state;
		return (
			<div className="sign-up">
				<h2>I do not have an account</h2>
				<span>
					Sign up with your email and password
				</span>
				<form
					className="sign-up-form"
					onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						label="Display Name"
						name="displayName"
						value={displayName}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						label="Email"
						name="email"
						value={email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						label="Password"
						name="password"
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						label="Confirm Password"
						name="confirmPassword"
						value={confirmPassword}
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">
						SIGN UP
					</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignUp;
