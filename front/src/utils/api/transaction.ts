import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from '../axios';

export const getTransactions = async () =>
	await axios.get<Transaction[]>('/transactions');

export const createTransaction = async (
	transaction: CreateTransactionRequest
) => await axios.post<Transaction>('/transactions', transaction);

export const getTransactionsByBankAccount = async (bankAccountId: number) =>
	await axios.get<Transaction[]>(`/transactions/bank-account/${bankAccountId}`);

export const useTransactions = () =>
	useQuery('transactions', getTransactions, {
		refetchOnWindowFocus: true,
	});

export const useCreateTransaction = () => {
	const queryClient = useQueryClient();

	return useMutation(createTransaction, {
		onSuccess: () => {
			queryClient.invalidateQueries('bank-accounts');
			queryClient.invalidateQueries(['transactions', 3]);
		},
	});
};

export const useTransactionsByBankAccount = (bankAccountId: number) =>
	useQuery(['transactions', bankAccountId], () =>
		getTransactionsByBankAccount(bankAccountId)
	);
