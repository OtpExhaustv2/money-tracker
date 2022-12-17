import { useQuery } from 'react-query';
import axios from '../axios';

export const getBankAccounts = async () =>
	await axios.get<BankAccount[]>('/bank-accounts');

export const useBankAccounts = () => useQuery('bank-accounts', getBankAccounts);
