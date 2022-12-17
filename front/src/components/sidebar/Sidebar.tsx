import { useBankAccounts } from '@/utils';
import { SidebarContainer, SidebarItems, SidebarTitle } from '@/utils/styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	const { data: bankAccounts } = useBankAccounts();
	const sidebarItems: TSidebarItem[] = [
		{
			name: 'Home',
			icon: 'home',
			path: '/',
		},
		{
			name: 'Bank accounts',
			icon: 'university',
			path: '/bank-accounts',
			isCollapsible: true,
			children: bankAccounts?.map((bankAccount) => <p>{bankAccount.iban}</p>),
		},
		{
			name: 'Dashboard',
			icon: 'dashboard',
			path: '/dashboard',
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
