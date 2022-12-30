import { BankAccounts } from '@/components';
import { Variants } from 'framer-motion';

import React from 'react';

const variants: Variants = {
	open: {
		height: 100,
	},
	collapsed: {
		height: 0,
	},
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<h1>Tableau de bord</h1>
			<BankAccounts />

			{/* <button
				onClick={() =>
					createTransaction({
						amount: Math.random() * 1000,
						bankAccountId: 3,
					})
				}>
				Créer une transaction
			</button>
			<button onClick={() => setVisible((c) => !c)}>Toggle</button>
			<AnimatePresence mode='wait'>
				{visible && (
					<motion.div
						style={{
							backgroundColor: 'blue',
							width: '100px',
						}}
						variants={variants}
						initial={'collapsed'}
						animate={'open'}
						exit='collapsed'
						transition={{
							duration: 0.5,
						}}>
						<p>Test</p>
					</motion.div>
				)}
			</AnimatePresence> */}
		</>
	);
};

export default Home;
