import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import {
	selectCartItems,
	selectCartTotal
} from '../../redux/cart/cart.selector';
function CheckOut({ cartItems, total }) {
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
			{cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)}
			<div className="total">TOTAL : ${total}</div>
		</div>
	);
}
const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total     : selectCartTotal
});
export default connect(mapStateToProps)(CheckOut);
