import { atom } from 'recoil';

export const currentUserState = atom({
	key     : 'currentUserState',
	persistence_UNSTABLE: { type: "log" },
	default : null
});
