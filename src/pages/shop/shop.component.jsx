import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';


function ShopPage({ match }) {
	
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverview}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				component={CollectionPage}
			/>
		</div>
	);
}
export default ShopPage;
