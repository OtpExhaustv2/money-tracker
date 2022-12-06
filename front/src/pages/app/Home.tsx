import React from 'react';
import { useAuth } from '../../utils/contexts';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const { logout } = useAuth();
	return (
		<div>
			<h1>Home</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Home;
