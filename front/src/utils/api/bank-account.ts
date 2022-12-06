import axios from '../axios';

export const getBankAccounts = async () =>
	axios.get<BankAccount[]>('/bank-accounts');
