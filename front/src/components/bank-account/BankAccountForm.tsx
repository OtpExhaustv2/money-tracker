import {
	deleteKey,
	Row,
	useCreateBankAccount,
	useUpdateBankAccount,
} from '@/utils';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import { modal } from '../modal/Modal';
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
	const {
		register,
		handleSubmit,
		formState: { isDirty },
		setValue,
	} = useForm({
		defaultValues: bankAccount,
	});

	useEffect(() => {
		modal.setConfig({
			showAsterisk: action === 'update' ? isDirty : false,
		});
	}, [isDirty]);

	useEffect(() => {
		modal.setConfig({
			onSubmit: handleSubmit(onSubmit),
			size: 'xl',
		});
	}, []);

	const onSubmit = (data: BankAccount) => {
		if (action === 'update' && !isDirty) return modal.hide();
		const bankAccount = deleteKey(data, 'transactions');
		(action === 'create' ? createBankAccount : updateBankAccount)(
			bankAccount as BankAccountWithoutTransactions
		);
	};

	return (
		<BankAccountFormContainer>
			<Row full>
				<Input
					register={register}
					fieldName='iban'
					label='IBAN'
					format={(iban: string) => {
						setValue(
							'iban',
							iban
								.replace(/[^\dA-Z]/g, '')
								.replace(/(.{4})/g, '$1 ')
								.trim()
						);
					}}
				/>
				<Input register={register} fieldName='name' label='Nom du compte' />
			</Row>
			<Row full>
				<Input
					register={register}
					type='number'
					fieldName='balance'
					label='Balance initiale'
				/>
			</Row>
		</BankAccountFormContainer>
	);
};

export default BankAccountForm;
