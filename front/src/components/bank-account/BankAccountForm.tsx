import { Row, useCreateBankAccount, useUpdateBankAccount } from '@/utils';
import React from 'react';
import Input from '../inputs/Input';
import { Panel, usePanel } from '../panel/Panel';
import { BankAccountFormContainer } from './bank-account.style';

interface BankAccountFormProps {
	bankAccount?: BankAccount;
	action: TAction;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({
	bankAccount,
	action,
}) => {
	const { mutate: updateBankAccount } = useUpdateBankAccount();
	const { mutate: createBankAccount } = useCreateBankAccount();
	const panel = usePanel({
		action: action,
		row: bankAccount,
		create: createBankAccount,
		update: updateBankAccount,
	});

	return (
		<BankAccountFormContainer>
			<Panel panel={panel}>
				<Row full>
					<Input<BankAccount> fieldName='balance' label='Balance initiale' />
				</Row>
			</Panel>
			{/* <Row full>
				<Input
					register={register}
					fieldName='iban'
					label='IBAN'
					// format={(iban: string) => {
					// 	setValue(
					// 		'iban',
					// 		iban
					// 			.replace(/[^\dA-Z]/g, '')
					// 			.replace(/(.{4})/g, '$1 ')
					// 			.trim()
					// 	);
					// }}
				/>
				<Input fieldName='name' label='Nom du compte' register={register} />
				<Input
					fieldName='isFavorite'
					label='Favoris'
					disabled={bankAccount?.isFavorite}
					register={register}
				/>
			</Row> */}
		</BankAccountFormContainer>
	);
};

export default BankAccountForm;
