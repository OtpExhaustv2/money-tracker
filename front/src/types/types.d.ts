import { CronExpression } from '../utils/constants';

declare global {
	type User = {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		accessToken: string;
		createdAt: Date;
		updatedAt: Date;
	};

	type BankAccount = {
		id: number;
		name: string;
		iban: string;
		balance: number;
		isFavorite: boolean;
		createdAt: Date;
		updatedAt: Date;
	};

	type Transaction = {
		id: number;
		amount: number;
		createdAt: Date;
		updatedAt: Date;
		bankAccountId: number;
	} & (
		| {
				isScheduled: true;
				scheduledAt: CronExpression;
		  }
		| {
				isScheduled?: false | never;
				scheduledAt?: never;
		  }
	);

	type LoginRequest = {
		email: string;
		password: string;
	};

	type LoginResponse = User & {
		accessToken: string;
	};

	type RegisterRequest = {
		firstName: string;
		lastName: string;
		email: string;
		password: string;
	};

	type RegisterResponse = User;

	type CreateTransactionRequest = {
		amount: number;
		bankAccountId: number;
	} & (
		| {
				isScheduled: true;
				scheduledAt: CronExpression;
		  }
		| {
				isScheduled?: false | never;
				scheduledAt?: never;
		  }
	);

	type SelectableTheme = 'light' | 'dark';
	type Global = {
		theme: SelectableTheme;
	};
}
