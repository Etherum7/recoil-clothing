import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../recoil/user/user.atom';
import { toggleCartHiddenState } from '../../recoil/cart/cart.atom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

function Header() {
	const currentUser = useRecoilValue(currentUserState);
	const hidden = useRecoilValue(toggleCartHiddenState)
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="Logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
}

export default Header;
