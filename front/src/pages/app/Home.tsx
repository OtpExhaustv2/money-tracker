import { BankAccounts } from '@/components';
import { modal } from '@/components/modal/Modal';

import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<h1>Tableau de bord</h1>
			<BankAccounts />

			<button onClick={() => modal.show()}>Toggle</button>
		</>
	);
};

export default Home;
