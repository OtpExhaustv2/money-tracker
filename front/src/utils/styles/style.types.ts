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
};
export type ModalContainerProps = {
	size?: TModalSize;
	borderRadius?: string | number;
};

export type ModalContentProps = {
	padding?: string;
};

export type AnimationDelayProps = {
	delay?: number;
};

export type BankAccountCardProps = {
	isFavorite?: boolean;
	showCursor?: boolean;
};

export type CenterProps = {
	fullHeight?: boolean;
	fullWidth?: boolean;
};

export type FlexProps = {
	full?: boolean;
};
