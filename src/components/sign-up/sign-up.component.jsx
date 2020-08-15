import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

function SignUp() {
	const [ displayName, setDisplayName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Password Don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			await createUserProfileDocument(user, {
				displayName
			});
			//an use it to store username
			setDisplayName('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className="sign-up">
			<h2>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					label="Display Name"
					name="displayName"
					value={displayName}
					handleChange={(event) => setDisplayName(event.target.value)}
					required
				/>
				<FormInput
					type="email"
					label="Email"
					name="email"
					value={email}
					handleChange={(event) => setEmail(event.target.value)}
					required
				/>
				<FormInput
					type="password"
					label="Password"
					name="password"
					value={password}
					handleChange={(event) => setPassword(event.target.value)}
					required
				/>
				<FormInput
					type="password"
					label="Confirm Password"
					name="confirmPassword"
					value={confirmPassword}
					handleChange={(event) =>
						setConfirmPassword(event.target.value)}
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
}

export default SignUp;
