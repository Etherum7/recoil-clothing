import { selector } from 'recoil';
import { cartItemsState } from './cart.atom';
import { addItemToCart } from './cart.utils';

export const addToCart = selector({
    key : 'addToCart',
    get: ({get})=> (get(cartItemsState)),
    set: ({set}, item)=> set(cartItemsState, addItemToCart(cartItemsState, item))
    
});

export const itemCountState = selector({
    key: 'itemCount',
    get:({get})=> {
        const cartItems = get(cartItemsState);
        return cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)

    }
})