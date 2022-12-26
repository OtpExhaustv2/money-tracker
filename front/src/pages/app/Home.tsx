import { BankAccounts } from '@/components';
import { useCreateTransaction } from '@/utils';

import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const { mutate: createTransaction } = useCreateTransaction();
	return (
		<>
			<h1>Tableau de bord</h1>
			<BankAccounts />
			<button
				onClick={() =>
					createTransaction({
						amount: Math.random() * 1000,
						bankAccountId: 3,
					})
				}>
				Créer une transaction
			</button>
		</>
	);
};

export default Home;
