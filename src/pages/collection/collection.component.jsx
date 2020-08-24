import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { useRecoilValue } from 'recoil';

import { selectCollectionFromUrlParam } from '../../recoil/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = (props) => {
	const collection = useRecoilValue(
		selectCollectionFromUrlParam(props.match.params.categoryId)
	);
	const { title, items } = collection;

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;
