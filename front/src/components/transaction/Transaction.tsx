import { formatCurrency, formatDate } from '@/utils';
import React from 'react';

interface TransactionProps {
	transaction: Transaction;
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
	return (
		<>
			<p>{formatCurrency(transaction.amount)}</p>
			<p>{formatDate(transaction.date)}</p>
			<p>{transaction.description}</p>
		</>
	);
};

export default Transaction;
