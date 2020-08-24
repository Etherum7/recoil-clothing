import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useRecoilState,useSetRecoilState, useTransactionObservation_UNSTABLE } from 'recoil';
import { currentUserState } from './recoil/user/user.atom';
import { cartItemsState } from './recoil/cart/cart.atom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
	const [ currentUser, setCurrentUser ] = useRecoilState(currentUserState);
	(function PersistenceObserver() {
		useTransactionObservation_UNSTABLE(
			({ atomValues, atomInfo, modifiedAtoms }) => {
				for (const modifiedAtom of modifiedAtoms) {
					localStorage.setItem(
						modifiedAtom,
						JSON.stringify({ value: atomValues.get(modifiedAtom) })
					);
				}
			}
		);
	})();
	const useInitializeState = () => {
		let cartItemsValue = localStorage.getItem('cartItems');
		let setCartItemsState = useSetRecoilState(cartItemsState);
		setCartItemsState(JSON.parse(cartItemsValue).value);
	};
	useInitializeState();
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
				<Route  path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
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
