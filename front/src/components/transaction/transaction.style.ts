import { AnimationDelayProps } from '@/utils/styles/style.types';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		transform: translateY(-10px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const TransactionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const TransactionContainer = styled.div<AnimationDelayProps>`
	display: flex;
	flex-direction: column;
	opacity: 0;
	animation: ${fadeIn} 0.5s ease-in-out forwards;
	animation-delay: ${({ delay }) => delay}ms;
`;
