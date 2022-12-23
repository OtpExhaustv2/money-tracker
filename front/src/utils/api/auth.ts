import { useQuery } from 'react-query';
import axios from '../axios';
import { getLocalStorage } from '../helpers';

export const register = async (params: RegisterRequest) =>
	await axios.post<RegisterResponse>('/auth/register', params);

export const login = async (params: LoginRequest) =>
	axios.post<LoginResponse>('/auth/login', params);

export const me = async () => {
	if (getLocalStorage('token')) {
		return await axios.get<User>('/users/me');
	}
	return null;
};

export const useMe = (cb: (data: User | null) => void) =>
	useQuery('me', me, {
		onSuccess(data) {
			cb(data);
		},
	});
