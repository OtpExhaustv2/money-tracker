import { createContext, ReactNode, useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { login, useMe } from '../api';
import { removeLocalStorage, setLocalStorage } from '../helpers';

export const useAuth = () => {
	const c = useContext(AuthContext);
	if (!c) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return c;
};

type AuthContextType = {
	user: User | null;
	login: (params: LoginRequest) => void;
	logout: () => void;
	isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	login: (params: LoginRequest) => {},
	logout: () => {},
	isLoading: true,
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const navigate = useNavigate();
	const { mutate: _login } = useMutation('login', login, {
		onSuccess(data) {
			setLocalStorage('token', data.accessToken);
			setUser(data);
			navigate('..');
		},
	});

	const { isLoading } = useMe((data) => setUser(data));

	const _logout = () => {
		removeLocalStorage('token');
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user: user,
				login: _login,
				logout: _logout,
				isLoading,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
