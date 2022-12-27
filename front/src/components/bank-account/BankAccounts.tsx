import { Center, useBankAccounts } from '@/utils';
import React from 'react';
import Icon from '../Icon';
import { modal } from '../modal/Modal';
import {
	BankAccountCard,
	BankAccountCardAdd,
	BankAccountContainer,
} from './bank-account.style';
import BankAccount from './BankAccount';
import BankAccountForm from './BankAccountForm';

interface BankAccountsProps {
	recentNumber?: number;
}

const BankAccounts: React.FC<BankAccountsProps> = ({ recentNumber = 3 }) => {
	const { data: bankAccounts, isLoading } = useBankAccounts();

	const createBankAccount = () => {
		modal.show({
			config: {
				title: 'Ajouter un compte bancaire',
				showAsterisk: false,
				showFooter: true,
			},
			children: <BankAccountForm action='create' />,
		});
	};

	return (
		<BankAccountContainer>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					{bankAccounts
						?.sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite))
						.map((bankAccount) => (
							<BankAccount
								key={bankAccount.iban}
								bankAccount={bankAccount}
								recentNumber={recentNumber}
							/>
						))}
					<BankAccountCard showCursor={false}>
						<Center fullHeight>
							<BankAccountCardAdd onClick={() => createBankAccount()}>
								<Icon icon='add' size='2x' />
							</BankAccountCardAdd>
						</Center>
					</BankAccountCard>
				</>
			)}
		</BankAccountContainer>
	);
};

export default BankAccounts;
