import axios from '../axios';

export const getBankAccounts = async () =>
	await axios.get<BankAccount[]>('/bank-accounts');
