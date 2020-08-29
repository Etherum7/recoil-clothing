import React from 'react';
import { useRecoilValue } from 'recoil';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { cartItemsState } from '../../recoil/cart/cart.atom';
import { cartItemsTotalState } from '../../recoil/cart/cart.selectors';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

function CheckOutPage() {
	const cartItems = useRecoilValue(cartItemsState);
	const cartTotal = useRecoilValue(cartItemsTotalState);

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Name</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckOutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total">TOTAL : ${cartTotal}</div>
			<div className='test-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		  </div>
		  <StripeCheckoutButton price={cartTotal} />
		</div>
	);
}

export default CheckOutPage;
