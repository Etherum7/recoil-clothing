import React from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { toggleCartHiddenState } from '../../recoil/cart/cart.atom';
import {itemCountState} from '../../recoil/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
	//Waiting For fix recoil issue #12
	const toggleHidden = useSetRecoilState(toggleCartHiddenState);
	const itemCount = useRecoilValue(itemCountState)
	return (
		<div
			className="cart-icon"
			onClick={()=> toggleHidden((state) => !state)}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

export default CartIcon;
