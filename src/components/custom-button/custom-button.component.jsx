import React from 'react';
import './custom-button.styles.scss';
function CustomButton({ isGoogleSignIn, children, ...otherProps }) {
	return (
		<button
			{...otherProps}
			className={`${isGoogleSignIn
				? 'google-sign-in'
				: ''} custom-button`}>
			{children}
		</button>
	);
}
export default CustomButton;
