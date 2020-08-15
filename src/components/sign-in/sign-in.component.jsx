import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

function SignIn() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();
		await auth.signInWithEmailAndPassword(email, password);
		//* Optimizations
		setEmail('');
		setPassword('');
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form className="sign-in-form" onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="Email"
					handleChange={(event) => setEmail(event.target.value)}
					required
				/>

				<FormInput
					name="password"
					type="password"
					label="Password"
					value={password}
					handleChange={(event) => setPassword(event.target.value)}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit" >
						Sign In{' '}
					</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
					{/*//!google is not visible*/}
				</div>
			</form>
		</div>
	);
}

export default SignIn;
