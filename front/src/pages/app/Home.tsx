import React from 'react';
import { useTransactions } from '../../utils/api';
import { useAuth } from '../../utils/contexts';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const { logout } = useAuth();
	const { data } = useTransactions();

	return (
		<div>
			<h1>Home</h1>
			<button onClick={logout}>Logout</button>
			{data?.map((transaction) => (
				<div key={transaction.id}>
					{transaction.isScheduled ? 'Scheduled' : 'Not Scheduled'}
					{transaction.id} - {transaction.amount} - {transaction.bankAccountId}
				</div>
			))}
		</div>
	);
};

export default Home;
