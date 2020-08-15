import { atom } from 'recoil';

export const toggleCartHiddenState = atom({
	key     : 'toggleCartHidden',
	default : true
});

export const cartItemsState = atom({
	key                        : 'cartItems',
	default                    : [],
	dangerouslyAllowMutability : true
});
