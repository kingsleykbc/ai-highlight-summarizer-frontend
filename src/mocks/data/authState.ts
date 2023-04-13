import { AuthContextType } from '../../contexts/AuthContext';

export const authStateMock: AuthContextType = {
	user: null,
	error: null,
	loading: true,
	signup: () => {},
	login: () => {},
	logout: () => {}
};

export const loggedInAuthStateMock: AuthContextType = {
	user: { _id: '123', name: 'Test User', email: 'test@react.com', createdAt: new Date() },
	error: null,
	loading: false,
	signup: () => {},
	login: () => {},
	logout: () => {}
};
