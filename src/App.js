import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUserState } from './recoil/user/user.atom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
	const [ currentUser, setCurrentUser ] = useRecoilState(currentUserState);
	useEffect(
		() => {
			const unsubscribeFromAuth = auth.onAuthStateChanged(
				async (userAuth) => {
					if (userAuth) {
						const userRef = await createUserProfileDocument(
							userAuth
						);
						userRef.onSnapshot((snapshot) => {
							setCurrentUser({
								...snapshot.data(),
								id : snapshot.id
							});
						});
					}
					else {
						setCurrentUser(userAuth);
					}
				}
			);
			return function cleanUp() {
				unsubscribeFromAuth();
			};
		},
		[ setCurrentUser ]
	);
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}
				/>
			</Switch>
		</div>
	);
}

export default App;
