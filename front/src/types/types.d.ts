import React from 'react';
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
		transactions: Transaction[];
	};

	type Transaction = {
		id: number;
		amount: number;
		description: string;
		date: Date;
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

	type TSidebarItem = {
		name: string;
		icon: IconProp;
		path: string;
	} & (
		| {
				isCollapsible: true;
				children?: React.ReactNode[];
		  }
		| {
				isCollapsible?: false | never;
				children?: never;
		  }
	);

	type TModalConfig = {
		title: string;
		showHeader: boolean;
		positionX: ModalPositionX;
		positionY: ModalPositionY;
		padding: string;
		showOverlay: boolean;
		allowClickOutside: boolean;
	} & (
		| {
				isForm: true;
				onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
		  }
		| {
				isForm?: false | never;
				onSubmit?: never;
		  }
	);

	type TModal = {
		show: (params?: {
			config?: Partial<TModalConfig>;
			children?: React.ReactNode;
		}) => void;
		hide: () => void;
	};
}
