import { ModalPositionX, ModalPositionY } from '../constants';

export type SidebarItemProps = {
	isActive?: boolean;
};

export type SidebarItemCollapseIconProps = {
	isCollapsed: boolean;
};

export type OverlayProps = {
	showOverlay?: boolean;
	positionX?: ModalPositionX;
	positionY?: ModalPositionY;
	shouldRender?: boolean;
};
export type ModalContainerProps = {
	shouldRender: boolean;
	size?: TModalSize;
	borderRadius?: string | number;
};

export type ModalContentProps = {
	padding?: string;
};

export type AnimationDelayProps = {
	delay?: number;
};
