import React from 'react';
import Transaction from './Transaction';

interface TransactionsProps {
	transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
	return (
		<>
			{transactions.map((transaction) => (
				<Transaction transaction={transaction} key={transaction.id} />
			))}
		</>
	);
};

export default Transactions;
