import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyAmjVg8LKbv7eZCrdsB_IJRssmEQG2Ea7Y',
	authDomain        : 'recoil-clothing.firebaseapp.com',
	databaseURL       : 'https://recoil-clothing.firebaseio.com',
	projectId         : 'recoil-clothing',
	storageBucket     : 'recoil-clothing.appspot.com',
	messagingSenderId : '801484819789',
	appId             : '1:801484819789:web:f22203fa869a81451f3b04',
	measurementId     : 'G-MQXQVE11WR'
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
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
export const createCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};
export function convertCollectionsSnapshotToMap(collections) {
	const transformedCollections = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			routeName : encodeURI(title.toLowerCase()),
			id        : doc.id,
			items,
			title
		};
	});
	return transformedCollections.reduce((accumalator, collection) => {
		accumalator[collection.title.toLowerCase()] = collection;
		return accumalator;
	}, {});
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
