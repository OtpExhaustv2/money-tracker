import {
	ModalContainerProps,
	ModalContentProps,
	OverlayProps,
} from '@/utils/styles/style.types';
import styled, { keyframes } from 'styled-components';

const fadeInOverlay = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutOverlay = keyframes`
  from {	
	opacity: 1;
  }
  to {
	opacity: 0;
  }
`;

const fadeInModal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
	transform: translateY(0);
  }
`;
const fadeOutModal = keyframes`
  from {
	opacity: 1;
	transform: translateY(0);
  }
  to {
    opacity: 0;
	transform: translateY(-50px);	
  }
`;

export const ModalButtonsContainer = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;
export const ModalButtonPrimary = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 3px;
	font-family: 'Robot', sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;
`;
export const ModalButtonSecondary = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 3px;
	background-color: transparent;
	font-family: 'Robot', sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;
`;

export const Overlay = styled.div<OverlayProps>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${(props) =>
		props.showOverlay ? 'rgba(23, 23, 23, 0.8)' : 'rgba(0, 0, 0, 0)'};
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.positionX ? props.positionX : 'center')};
	align-items: ${(props) => (props.positionY ? props.positionY : 'center')};
	padding: 40px;
	backdrop-filter: blur(2px);
	animation: ${({ shouldRender }) =>
			shouldRender ? fadeInOverlay : fadeOutOverlay}
		0.4s ease-in-out forwards;
`;
export const ModalContainer = styled.div<ModalContainerProps>`
	width: ${({ size }) =>
		size === 'xs'
			? '300px'
			: size === 'sm'
			? '400px'
			: size === 'md'
			? '500px'
			: size === 'lg'
			? '600px'
			: size === 'xl'
			? '700px'
			: '500px'};
	min-height: 50px;
	position: relative;
	border-radius: ${({ borderRadius }) => borderRadius};
	background-color: white;
	transform: translateY(-50px);

	animation: ${({ shouldRender }) =>
			shouldRender ? fadeInModal : fadeOutModal}
		0.4s ease-in-out forwards;
`;
export const ModalHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20px;
	padding: 15px 10px;
	h3 {
		font-weight: 500;
		font-size: 16px;
		margin: 0;
	}
`;

export const ModalContent = styled.div<ModalContentProps>`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
	padding: ${(props) => (props.padding ? props.padding : '10px')};
`;

export const ModalFooter = styled.footer`
	width: 100%;
	display: flex;
	margin-top: 20px;
	padding: 15px 10px;
	border-top: 1px solid ${({ theme }) => theme.background.primary};
`;
