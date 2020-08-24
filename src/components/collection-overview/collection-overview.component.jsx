import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
//*recoil
import { useRecoilValue } from 'recoil';
import { selectCollectionsForPreview } from '../../recoil/shop/shop.selector';
import './collection-overview.styles.scss';

const CollectionsOverview = () => {
	const collections = useRecoilValue(selectCollectionsForPreview);
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default CollectionsOverview;
