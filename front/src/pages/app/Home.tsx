import { BankAccounts } from '@/components';
import { modal } from '@/components/modal/Modal';

import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<h1>Tableau de bord</h1>
			<BankAccounts />

			<button
				onClick={() =>
					modal.show({
						config: {
							title: 'test',
							isForm: true,
						},
						children: <h1>test</h1>,
					})
				}>
				Toggle
			</button>
			<button onClick={() => modal.show()}>Toggle 2</button>
		</>
	);
};

export default Home;
