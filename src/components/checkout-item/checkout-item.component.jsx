import React from 'react';
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
} from '../../recoil/cart/cart.utils';
import { cartItemsState } from '../../recoil/cart/cart.atom';

import { useSetRecoilState } from 'recoil';

import './checkout-item.styles.scss';

function CheckOutItem({ cartItem }) {
	const { imageUrl, name, price, quantity } = cartItem;
	const setCartItemsState = useSetRecoilState(cartItemsState);

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="price">{price}</span>
			<span className="quantity">
				<div
					className="arrow"
					onClick={() =>
						setCartItemsState((cartItems) =>
							removeItemFromCart(cartItems, cartItem)
						)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow"
					onClick={() =>
						setCartItemsState((cartItems) =>
							addItemToCart(cartItems, cartItem)
						)}>
					&#10095;
				</div>
			</span>
			<div
				className="remove-button"
				onClick={() =>
					setCartItemsState((cartItems) =>
						clearItemFromCart(cartItems, cartItem)
					)}>
				&#10005;
			</div>
		</div>
	);
}

export default CheckOutItem;
