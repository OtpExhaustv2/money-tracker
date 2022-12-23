import { BankAccountContainer, useBankAccounts } from '@/utils';
import React from 'react';
import BankAccount from './BankAccount';

interface BankAccountsProps {
	recentNumber?: number;
}

const BankAccounts: React.FC<BankAccountsProps> = ({ recentNumber }) => {
	const { data: bankAccounts, isLoading } = useBankAccounts();
	return (
		<BankAccountContainer>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				bankAccounts?.map((bankAccount) => (
					<BankAccount
						key={bankAccount.iban}
						bankAccount={bankAccount}
						recentNumber={recentNumber}
					/>
				))
			)}
		</BankAccountContainer>
	);
};

export default BankAccounts;
