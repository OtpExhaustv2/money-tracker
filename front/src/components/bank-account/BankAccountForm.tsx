import { useIsDirty } from '@/hooks';
import { useUpdateBankAccount } from '@/utils';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import { modal } from '../modal/Modal';
import { BankAccountFormContainer } from './bank-account.style';

interface BankAccountFormProps {
	bankAccount: BankAccount;
	isEdit?: boolean;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ bankAccount }) => {
	const { mutate: updateBankAccount } = useUpdateBankAccount();
	const { register, handleSubmit, watch } = useForm({
		defaultValues: bankAccount,
	});

	const dirty = useIsDirty(bankAccount, watch());

	useEffect(() => {
		modal.setConfig({
			showAsterisk: dirty,
		});
	}, [dirty]);

	useEffect(() => {
		modal.setConfig({
			onSubmit: handleSubmit(onSubmit),
		});
	}, []);

	const onSubmit = (data: BankAccount) => {
		updateBankAccount(data);
	};

	return (
		<BankAccountFormContainer>
			<Input register={register} fieldName='name' />
			<input {...register('balance', { valueAsNumber: true })} />
		</BankAccountFormContainer>
	);
};

export default BankAccountForm;
