import { useTheme } from '@/hooks';
import { useAuth, useTransactions } from '@/utils';
import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const { data } = useTransactions();
	const { setTheme } = useTheme();
	const { user } = useAuth();

	return (
		<>
			<h1>Bonjour {user?.firstName}</h1>
		</>
	);
};

export default Home;
