import {
	BankAccountCard,
	BankAccountCardHeader,
	formatCurrency,
} from '@/utils';
import React, { useMemo } from 'react';
import { Transactions } from '../transaction';

interface BankAccountProps {
	bankAccount: BankAccount;
	recentNumber?: number;
}

const BankAccount: React.FC<BankAccountProps> = ({
	bankAccount,
	recentNumber = 3,
}) => {
	const recentsTransactions = useMemo(
		() => bankAccount.transactions.slice(0, recentNumber),
		[bankAccount.transactions, recentNumber]
	);

	return (
		<BankAccountCard>
			<BankAccountCardHeader>
				<p>{bankAccount.iban}</p>
				<p>{formatCurrency(bankAccount.balance)}</p>
			</BankAccountCardHeader>
			{recentsTransactions.length > 0 ? (
				<Transactions transactions={recentsTransactions} />
			) : null}
		</BankAccountCard>
	);
};

export default BankAccount;
