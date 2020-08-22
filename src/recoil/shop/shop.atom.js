import { atom } from 'recoil';
import SHOP_DATA from './shop.data';

export const collectionsState = atom({
	key                  : 'collections',
	default              : SHOP_DATA,
	persistence_UNSTABLE : { type: 'log' }
});
