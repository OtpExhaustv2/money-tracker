import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	SidebarChildrenItem,
	SidebarChildrenItemContainer,
	SidebarItemCollapseIcon,
	SidebarItemContainer,
	SidebarItemIcon,
	SidebarItemName,
} from './sidebar.style';

const SidebarItem: React.FC<TSidebarItem> = ({
	path,
	name,
	icon,
	isCollapsible,
	children,
}) => {
	const location = useLocation();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleCollapse = () => {
		setIsCollapsed((_) => !_);
	};

	return (
		<>
			<SidebarItemContainer isActive={location.pathname === path}>
				<Link to={path}>
					<SidebarItemIcon>
						<FontAwesomeIcon icon={icon} />
					</SidebarItemIcon>
					<SidebarItemName>{name}</SidebarItemName>
				</Link>
				{isCollapsible && (
					<SidebarItemCollapseIcon isCollapsed={isCollapsed}>
						<FontAwesomeIcon icon='chevron-down' onClick={toggleCollapse} />
					</SidebarItemCollapseIcon>
				)}
			</SidebarItemContainer>
			<AnimatePresence>
				{isCollapsible && isCollapsed && (
					<SidebarChildrenItemContainer isCollapsed={isCollapsed}>
						{children?.map((child, index) => (
							<SidebarChildrenItem key={index} isCollapsed={isCollapsed}>
								{child}
							</SidebarChildrenItem>
						))}
					</SidebarChildrenItemContainer>
				)}
			</AnimatePresence>
		</>
	);
};

export default SidebarItem;
