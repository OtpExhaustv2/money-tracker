import {
	ModalContainerProps,
	ModalContentProps,
	OverlayProps,
} from '@/utils/styles/style.types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

export const Overlay = styled(motion.div)<OverlayProps>`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ showOverlay }) =>
		showOverlay ? 'rgba(23, 23, 23, 0.8)' : 'rgba(0, 0, 0, 0)'};
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.positionX ? props.positionX : 'center')};
	align-items: ${(props) => (props.positionY ? props.positionY : 'center')};
	padding: 40px;
	backdrop-filter: blur(2px);
`;
export const ModalContainer = styled(motion.div)<ModalContainerProps>`
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
`;

export const ModalHeader = styled.header`
	display: flex;
	width: 100%;
	padding: 10px 15px;
	border-bottom: 1px solid black;

	h3 {
		font-weight: 500;
		font-size: 1.2rem;
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
