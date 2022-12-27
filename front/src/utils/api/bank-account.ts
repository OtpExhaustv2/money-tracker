import { modal } from '@/components/modal/Modal';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../axios';

export const getBankAccounts = async () =>
	await axios.get<BankAccount[]>('/bank-accounts');

export const updateBankAccount = async (
	bankAccount: BankAccountWithoutTransactions
) => await axios.put(`/bank-accounts/${bankAccount.id}`, bankAccount);

export const useBankAccounts = () => useQuery('bank-accounts', getBankAccounts);

export const createBankAccount = async (
	bankAccount: BankAccountWithoutTransactions
) => await axios.post('/bank-accounts', bankAccount);

export const useCreateBankAccount = () => {
	const queryClient = useQueryClient();

	return useMutation(createBankAccount, {
		onSuccess: () => {
			queryClient.invalidateQueries('bank-accounts');
			modal.hide();
		},
	});
};

export const useUpdateBankAccount = () => {
	const queryClient = useQueryClient();

	return useMutation(updateBankAccount, {
		onSuccess: () => {
			queryClient.invalidateQueries('bank-accounts');
			modal.hide();
		},
	});
};
