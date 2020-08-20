import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { cartItemsState } from '../../recoil/cart/cart.atom';
import { toggleCartHiddenState } from '../../recoil/cart/cart.atom';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ history }) => {
	const cartItems = useRecoilValue(cartItemsState);
	const toggleHidden = useSetRecoilState(toggleCartHiddenState);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message"> YOUR CART IS EMPTY</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					toggleHidden((state) => !state);
					history.push('/checkout');
				}}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default withRouter(CartDropdown);
