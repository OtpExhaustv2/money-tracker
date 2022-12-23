import styled, { keyframes } from 'styled-components';
import { SidebarItemCollapseIconProps, SidebarItemProps } from './style.types';

export const MainContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(14rem, 15%) 1fr;
	height: 100vh;
	color: ${({ theme }) => theme.text.primary};

	& > * {
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	}
`;

export const AppContainer = styled.div`
	background-color: ${({ theme }) => theme.background.primary};
	overflow: auto;
	padding: 1rem;
`;

export const SidebarContainer = styled.div`
	background-color: ${({ theme }) => theme.background.secondary};
	padding: 1rem;
`;

export const SidebarTitle = styled.h1`
	font-weight: 600;
	text-align: center;
	margin-bottom: 1rem;
`;

export const SidebarItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const SidebarItemContainer = styled.div<SidebarItemProps>`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	color: ${({ theme }) => theme.text.secondary};
	gap: 0.5rem;

	background-color: ${({ isActive, theme }) =>
		isActive && theme.background.hover};
	color: ${({ isActive, theme }) => isActive && theme.text.primary};

	&:hover {
		background-color: ${({ theme }) => theme.background.hover};
		color: ${({ theme }) => theme.text.primary};
	}
`;

export const SidebarItemIcon = styled.span``;

export const SidebarItemName = styled.span`
	margin-left: 0.5rem;
`;

export const SidebarItemCollapseIcon = styled.span<SidebarItemCollapseIconProps>`
	margin-left: auto;
	transform: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'rotate(-90deg)')};
	transition: transform 0.2s ease-in-out;
`;

export const SidebarChildrenItemContainer = styled.div<SidebarItemCollapseIconProps>`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-left: 2rem;
`;

export const SidebarChildrenItem = styled.div<SidebarItemCollapseIconProps>``;

export const BankAccountContainer = styled.div`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	gap: 1rem;
`;

export const BankAccountCard = styled.div`
	background-color: ${({ theme }) => theme.background.secondary};
	padding: 1rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	// add box-shadow on hover
	&:hover {
		box-shadow: 0.5rem 0.5rem 5px 0 rgba(0 0 0 / 20%);
		transform: translateY(-0.2rem);
	}
`;

export const BankAccountCardHeader = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;
