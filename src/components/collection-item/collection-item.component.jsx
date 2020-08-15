import React from 'react';
import { useSetRecoilState } from 'recoil';

import { addItemToCart } from '../../recoil/cart/cart.utils';
import { cartItemsState } from '../../recoil/cart/cart.atom';

import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

function CollectionItem({ item }) {
	const { name, price, imageUrl } = item;
	const setCartItemsState = useSetRecoilState(cartItemsState);
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton
				inverted
				className="custom-button"
				onClick={() =>
					setCartItemsState((cartItems) =>
						addItemToCart(cartItems, item)
					)}>
				Add to cart
			</CustomButton>
		</div>
	);
}
export default CollectionItem;
