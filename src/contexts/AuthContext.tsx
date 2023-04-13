import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';
import { LoginParam, SignupParam, login, signup } from '../services/auth';
import { UserType, getUserProfile } from '../services/users';
import { useSnackbar } from './SnackbarContext';

export interface AuthContextType {
	user: UserType | null;
	loading: boolean;
	error: string | null;
	signup: (data: SignupParam) => void;
	login: (data: LoginParam) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	user: null,
	error: null,
	loading: true,
	signup: () => {},
	login: () => {},
	logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<UserType | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { showSnackbar } = useSnackbar();

	const fetchProfile = async (token?: string) => {
		setLoading(true);
		setError(null);
		try {
			const data = await getUserProfile(token);
			setUser(data);
		} catch (e: any) {
			if (e.message === 'Token has expired') {
				logout();
			}
			setError(e.message);
		}
		setLoading(false);
	};

	const handleSignup = async (data: SignupParam) => {
		setLoading(true);
		setError(null);
		try {
			const { access_token } = await signup(data);
			Cookies.set('user', access_token, { expires: 60 });
			fetchProfile(access_token);
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
		showSnackbar({ message: 'Signup successful' });
	};

	const handleLogin = async (data: LoginParam) => {
		setLoading(true);
		setError(null);
		try {
			const { access_token } = await login(data);
			Cookies.set('user', access_token, { expires: 60 });
			fetchProfile(access_token);
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
		showSnackbar({ message: 'Login successful' });
	};

	const logout = () => {
		Cookies.remove('user');
		setUser(null);
	};

	useEffect(() => {
		const auth = Cookies.get('user');
		if (auth) {
			fetchProfile(auth);
		}
	}, []);

	const values = useMemo(() => ({ loading, error, user, login: handleLogin, signup: handleSignup, logout }), [loading, error, user]);

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
