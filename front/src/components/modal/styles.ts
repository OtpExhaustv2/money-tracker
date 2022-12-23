import styled, { keyframes } from 'styled-components';
import { ModalPositionX, ModalPositionY } from './modal.interface';

interface PropsOverlay {
	showOverlay: boolean;
	positionX: ModalPositionX;
	positionY: ModalPositionY;
	shouldRender: boolean;
}
interface PropsModalContainer {
	padding: string;
	shouldRender: boolean;
}

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

export const Overlay = styled.div<PropsOverlay>`
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
export const ModalContainer = styled.div<PropsModalContainer>`
	width: 500px;
	min-height: 50px;
	position: relative;
	border-radius: 5px;
	background-color: white;
	transform: translateY(-50px);
	padding: ${(props) => (props.padding ? props.padding : '20px')};
	animation: ${({ shouldRender }) =>
			shouldRender ? fadeInModal : fadeOutModal}
		0.4s ease-in-out forwards;
`;
export const ModalHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.text};
	h3 {
		font-weight: 500;
		font-size: 16px;
		margin: 0;
	}
`;

export const Close = styled.button`
	position: absolute;
	top: 15px;
	right: 20px;
	width: 40px;
	height: 40px;
	border: none;
	background-color: transparent;
	transition: 0.3s ease all;
	border-radius: 3px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
	svg {
		width: 100%;
		height: 100%;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.text};
	h1 {
		font-size: 42px;
		font-weight: 700px;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
export const ModalFooter = styled.footer`
	width: 100%;
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	padding-top: 20px;
	border-top: 1px solid ${({ theme }) => theme.text};
`;
