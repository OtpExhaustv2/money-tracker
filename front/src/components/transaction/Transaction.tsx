import { formatCurrency, formatDate } from '@/utils';
import { useIsPresent, Variants } from 'framer-motion';
import React from 'react';
import { TransactionContainer } from './transaction.style';

interface TransactionProps {
	transaction: Transaction;
	index: number;
}

const variants: Variants = {
	hidden: { opacity: 0, y: -20, scale: 0.2 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4,
		},
	},
	exit: {
		opacity: 0,
	},
};

const Transaction: React.FC<TransactionProps> = ({ transaction, index }) => {
	const isPresent = useIsPresent();

	return (
		<TransactionContainer
			style={{
				display: isPresent ? 'block' : 'none',
			}}
			layout
			variants={variants}
			initial='hidden'
			animate={{
				...variants.visible,
				transition: {
					delay: index * 0.1,
				},
			}}
			exit='exit'>
			<p>{formatCurrency(transaction.amount)}</p>
			<p>{formatDate(transaction.date)}</p>
			<p>{transaction.description}</p>
		</TransactionContainer>
	);
};

export default Transaction;
