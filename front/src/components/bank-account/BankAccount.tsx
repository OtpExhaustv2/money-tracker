import { formatCurrency } from '@/utils';
import React from 'react';
import Icon from '../Icon';
import { modal } from '../modal/Modal';
import { Transactions } from '../transaction';
import {
	BankAccountCard,
	BankAccountCardHeader,
	BankAccountCardHeaderActions,
	BankAccountCardHeaderTitle,
} from './bank-account.style';
import BankAccountForm from './BankAccountForm';

interface BankAccountProps {
	bankAccount: BankAccount;
	recentNumber?: number;
}

const BankAccount: React.FC<BankAccountProps> = ({
	bankAccount,
	recentNumber,
}) => {
	const editBankAccount = () => {
		modal.show({
			config: {
				title: 'Editer un compte bancaire',
				showFooter: true,
			},
			children: <BankAccountForm bankAccount={bankAccount} action='update' />,
		});
	};

	return (
		<BankAccountCard isFavorite={bankAccount.isFavorite}>
			<BankAccountCardHeader>
				<BankAccountCardHeaderTitle>
					<h2>{bankAccount.name}</h2>
					<h3>{bankAccount.iban}</h3>
					<span>{formatCurrency(bankAccount.balance)}</span>
				</BankAccountCardHeaderTitle>
				<BankAccountCardHeaderActions>
					<Icon icon='pen' onClick={() => editBankAccount()} />
				</BankAccountCardHeaderActions>
			</BankAccountCardHeader>

			<Transactions
				recentNumber={recentNumber}
				bankAccountId={bankAccount.id}
			/>
		</BankAccountCard>
	);
};

export default BankAccount;
