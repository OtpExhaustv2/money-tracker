import {
	SidebarItemCollapseIconProps,
	SidebarItemProps,
} from '@/utils/styles/style.types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

export const SidebarChildrenItemContainer = styled(
	motion.div
)<SidebarItemCollapseIconProps>`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-left: 2rem;
`;

export const SidebarChildrenItem = styled.div<SidebarItemCollapseIconProps>``;
