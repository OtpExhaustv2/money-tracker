import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../utils/contexts';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
	const { login } = useAuth();
	const { register, handleSubmit } = useForm<LoginParams>({
		defaultValues: {
			email: 'sebastien.vanvreckem@gmail.com',
			password: 'azerty1234',
		},
	});

	return (
		<div>
			<form onSubmit={handleSubmit(login)}>
				<input type='text' {...register('email')} />
				<input type='password' {...register('password')} />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
