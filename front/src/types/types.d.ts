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

	type BankAccountWithoutTransactions = Omit<BankAccount, 'transactions'>;

	type Transaction = {
		id: number;
		amount: number;
		description?: string;
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

	type TModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	type TModalConfig = {
		title?: string;
		showHeader?: boolean;
		showFooter?: boolean;
		showAsterisk?: boolean;
		positionX?: ModalPositionX;
		positionY?: ModalPositionY;
		contentPadding?: string;
		showOverlay?: boolean;
		allowClickOutside?: boolean;
		size?: TModalSize;
		borderRadius?: string | number;
		onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	};

	type TModal = {
		show: (params?: {
			config?: TModalConfig;
			children?: React.ReactNode;
		}) => void;
		hide: () => void;
		setConfig: (config: TModalConfig) => void;
	};

	type TAction = 'view' | 'create' | 'update';
}
