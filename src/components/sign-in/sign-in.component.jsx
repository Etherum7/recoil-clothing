import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email    : '',
			password : ''
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name] : value
		});
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form className='sign-in-form' onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						label="Email"
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className= 'buttons'>
						<CustomButton type="submit">Sign In </CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
							
						</CustomButton>
						  {/*//!google is not visible*/}
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
