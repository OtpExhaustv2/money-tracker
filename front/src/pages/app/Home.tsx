import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useTransactions } from '../../utils/api';
import { useAuth } from '../../utils/contexts';
import { HomeContainer } from '../../utils/styles';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const { logout } = useAuth();
	const { data } = useTransactions();
	const { theme, setTheme } = useTheme();

	return (
		<HomeContainer>
			<h1>Home</h1>
			<h2>{theme}</h2>
			<button onClick={() => setTheme('dark')}>Dark</button>
			<button onClick={() => setTheme('light')}>Light</button>
			<button onClick={logout}>Logout</button>
			{data?.map((transaction) => (
				<div key={transaction.id}>
					{transaction.isScheduled ? 'Scheduled' : 'Not Scheduled'}
					{transaction.id} - {transaction.amount} - {transaction.bankAccountId}
				</div>
			))}
		</HomeContainer>
	);
};

export default Home;
