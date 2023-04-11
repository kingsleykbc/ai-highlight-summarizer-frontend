import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
	email: string;
}

export interface AuthContextType {
	user: User | null;
	loading: boolean;
	login: (email: string, password: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
	login: () => {},
	logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const login = async (email: string, password: string) => {
		// TODO: Handle login
		const user: User = { email };
		Cookies.set('user', JSON.stringify(user), { expires: 60 });
		setUser(user);
	};

	const logout = () => {
		// TODO: Handle logout
		Cookies.remove('user');
		setUser(null);
	};

	useEffect(() => {
		const storedUser = Cookies.get('user');
		if (storedUser) {
			const user = JSON.parse(storedUser);
			setUser(user);
		}
		setLoading(false);
	}, []);

	const values = {
		loading,
		user: user,
		login: login,
		logout: logout
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
