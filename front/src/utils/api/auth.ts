import { useQuery } from 'react-query';
import axios from '../axios';

export const register = async (params: RegisterRequest) =>
	await axios.post<RegisterResponse>('/auth/register', params);

export const login = async (params: LoginRequest) =>
	axios.post<LoginResponse>('/auth/login', params);

export const me = async () => axios.get<User>('/users/me');

export const useMe = (cb: (data: User) => void) =>
	useQuery('me', me, {
		onSuccess(data) {
			cb(data);
		},
	});
