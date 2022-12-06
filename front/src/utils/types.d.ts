type User = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	accessToken?: string;
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
};

type LoginParams = {
	email: string;
	password: string;
};

type LoginResponse = User & {
	accessToken: string;
};

type RegisterParams = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

type RegisterResponse = User;
