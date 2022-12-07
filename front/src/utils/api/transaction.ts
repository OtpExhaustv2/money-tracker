import { useQuery } from 'react-query';
import axios from '../axios';

export const getTransactions = async () =>
	await axios.get<Transaction[]>('/transactions');

export const createTransaction = async (
	transaction: CreateTransactionRequest
) => await axios.post<Transaction>('/transactions', transaction);

export const useTransactions = () =>
	useQuery('transactions', getTransactions, {
		refetchOnWindowFocus: true,
	});
