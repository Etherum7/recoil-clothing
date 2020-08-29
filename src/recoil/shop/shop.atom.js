import { atom } from 'recoil';

export const collectionsState = atom({
	key                  : 'collectionsState',
	default              : null,
	persistence_UNSTABLE : { type: 'log' }
});
