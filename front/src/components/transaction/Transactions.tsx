import { useTransactionsByBankAccount } from '@/utils';
import React, { useMemo } from 'react';
import Transaction from './Transaction';
import {
	TransactionContainer,
	TransactionsContainer,
} from './transaction.style';

interface TransactionsProps {
	bankAccountId: number;
	recentNumber?: number;
}

const Transactions: React.FC<TransactionsProps> = ({
	bankAccountId,
	recentNumber,
}) => {
	const { data: transactions } = useTransactionsByBankAccount(bankAccountId);

	const recentsTransactions = useMemo(
		() => transactions?.slice(0, recentNumber),
		[transactions, recentNumber]
	);

	return (
		<TransactionsContainer>
			{recentsTransactions?.map((transaction, index) => (
				<TransactionContainer key={transaction.id} delay={index * 200}>
					<Transaction transaction={transaction} />
				</TransactionContainer>
			))}
		</TransactionsContainer>
	);
};

export default Transactions;
