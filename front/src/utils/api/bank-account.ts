import { modal } from '@/components/modal/Modal';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../axios';

export const getBankAccounts = async () =>
	await axios.get<BankAccount[]>('/bank-accounts');

export const updateBankAccount = async (bankAccount: BankAccount) =>
	await axios.put(`/bank-accounts/${bankAccount.id}`, bankAccount);

export const useBankAccounts = () => useQuery('bank-accounts', getBankAccounts);

export const useUpdateBankAccount = () => {
	const queryClient = useQueryClient();

	return useMutation(updateBankAccount, {
		onSuccess: () => {
			queryClient.invalidateQueries('bank-accounts');
			modal.hide();
		},
	});
};
