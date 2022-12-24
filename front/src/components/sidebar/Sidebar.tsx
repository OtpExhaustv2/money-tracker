import { useBankAccounts } from '@/utils';
import { SidebarContainer, SidebarItems, SidebarTitle } from '@/utils/styles';
import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	const { data: bankAccounts } = useBankAccounts();
	const sidebarItems: TSidebarItem[] = [
		{
			name: 'Tableau de bord',
			icon: 'dashboard',
			path: '/',
		},
		{
			name: 'Comptes bancaires',
			icon: 'credit-card',
			path: '/bank-accounts',
			isCollapsible: true,
			children: bankAccounts?.map((bankAccount) => <p>{bankAccount.iban}</p>),
		},
	];

	return (
		<SidebarContainer>
			<SidebarTitle>Money Tracker</SidebarTitle>
			<SidebarItems>
				{sidebarItems.map((item, index) => (
					<SidebarItem {...item} key={index} />
				))}
			</SidebarItems>
		</SidebarContainer>
	);
};

export default Sidebar;
