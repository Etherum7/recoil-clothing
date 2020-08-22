import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
//*recoil
import { useRecoilValue } from 'recoil';
import { collectionsState } from '../../recoil/shop/shop.atom';
import './collection-overview.styles.scss';

const CollectionsOverview = () => {
	const collections = useRecoilValue(collectionsState);
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default CollectionsOverview;
