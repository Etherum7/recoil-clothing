import React from 'react';
import './custom-button.styles.scss';
function CustomButton({ isGoogleSignIn, children, inverted, ...otherProps }) {
	return (
		<button
			{...otherProps}
			className={`${inverted
				? 'inverted'
				: ''} custom-button ${isGoogleSignIn
				? 'google-sign-in'
				: ''} custom-button`}>
			{children}
		</button>
	);
}
export default CustomButton;
