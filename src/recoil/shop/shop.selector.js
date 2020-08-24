import { collectionsState } from './shop.atom';
import { selector,selectorFamily } from 'recoil';

export const selectCollectionFromUrlParam = selectorFamily({
	key : 'selectCollectionFromUrlParam',
	get : (urlParam) => ({ get }) => {
		const collections = get(collectionsState);
		return collections[urlParam];
	}
});

export const selectCollectionsForPreview = selector({
	key: 'selectCollectionForPreview',
	get:({get})=>{
		const collections = get(collectionsState);
		return Object.keys(collections).map(key => collections[key])
	}
})