import axios from 'axios';
import { BASE_URL } from '../constants';

const source = axios.CancelToken.source();

const instance = axios.create({
	baseURL: `${BASE_URL}/api`,
	cancelToken: source.token,
});

instance.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('token');
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

instance.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		if (axios.isCancel(error)) {
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);

export default instance;
