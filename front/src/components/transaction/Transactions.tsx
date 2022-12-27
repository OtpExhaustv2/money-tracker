import { useTransactionsByBankAccount } from '@/utils';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { useMemo } from 'react';
import Transaction from './Transaction';
import { TransactionsContainer } from './transaction.style';

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
		<LayoutGroup>
			<TransactionsContainer layout>
				<AnimatePresence>
					{recentsTransactions?.map((transaction, index) => (
						<Transaction
							transaction={transaction}
							key={transaction.id}
							index={index}
						/>
					))}
				</AnimatePresence>
			</TransactionsContainer>
		</LayoutGroup>
	);
};

export default Transactions;
