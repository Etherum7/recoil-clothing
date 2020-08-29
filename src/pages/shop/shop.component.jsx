import React, { useEffect, useState } from 'react';

import { Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { collectionsState } from '../../recoil/shop/shop.atom';


import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import './shop.styles.scss';

function ShopPage({ match }) {
	const [ isLoading, setIsLoading ] = useState(true);

	const collectionRef = firestore.collection('collections');

	const setCollectionsState = useSetRecoilState(collectionsState);

	const CollectionPageWithSpinner = WithSpinner(CollectionPage);
	const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

	useEffect(() => {
		const unsubscribeFromAuth = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(
					snapshot
				);
				setCollectionsState(collectionsMap);
				setIsLoading(false);
			}
		);
		return unsubscribeFromAuth;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={(routeProps)=><CollectionsOverviewWithSpinner isLoading={isLoading} {...routeProps}/>}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				render={(routeProps)=><CollectionPageWithSpinner isLoading={isLoading} {...routeProps} />}	
			/>
		</div>
	);
}
export default ShopPage;
