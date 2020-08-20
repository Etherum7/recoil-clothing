import { atom } from 'recoil';

export const toggleCartHiddenState = atom({
	key     : 'toggleCartHidden',
	default : true,
	persistence_UNSTABLE: { type: "log" }
});

export const cartItemsState = atom({
	key                        : 'cartItems',
	default                    : [],
	dangerouslyAllowMutability : true,
	persistence_UNSTABLE: { type: "log" }
});
