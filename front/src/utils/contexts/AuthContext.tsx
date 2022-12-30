import { login, removeLocalStorage, setLocalStorage, useMe } from '@/utils';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export const useAuth = () => {
	const c = useContext(AuthContext);
	if (!c) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return c;
};

type TAuthContext = {
	user: User | null;
	login: (params: LoginRequest) => void;
	logout: () => void;
	isLoading: boolean;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState<User | null>(null);
	const { mutate: _login } = useMutation('login', login, {
		onSuccess(data) {
			setLocalStorage('token', data.accessToken);
			setUser(data);
			navigate(location.state.from ?? '/');
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
