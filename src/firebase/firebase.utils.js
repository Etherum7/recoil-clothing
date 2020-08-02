import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            :
		'AIzaSyC74O3m-3wi3ktQhSk7-Weaxvfj_XkgWEw',
	authDomain        :
		'crwn-clothing-db-7991c.firebaseapp.com',
	databaseURL       :
		'https://crwn-clothing-db-7991c.firebaseio.com',
	projectId         : 'crwn-clothing-db-7991c',
	storageBucket     :
		'crwn-clothing-db-7991c.appspot.com',
	messagingSenderId : '893153129870',
	appId             :
		'1:893153129870:web:1968ecb09c95eef8a1a0df',
	measurementId     : 'G-35GMH73Q9V'
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (
	userAuth,
	additionalData
) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			//*Used await
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log(error.message);
		}
	}
	return userRef;
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
	auth.signInWithPopup(provider);
export default firebase;
