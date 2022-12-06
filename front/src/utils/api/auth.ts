import { useQuery } from 'react-query';
import axios from '../axios';

export const register = async (params: RegisterParams) =>
	axios.post<RegisterResponse>('/auth/register', params);

export const login = async (params: LoginParams) =>
	axios.post<LoginResponse>('/auth/login', params);

export const me = async () => axios.get<User>('/users/me');

export const useMe = (cb: (data: User) => void) =>
	useQuery('me', me, {
		onSuccess(data) {
			cb(data);
		},
	});
