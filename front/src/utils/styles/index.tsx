import styled, { css } from 'styled-components';
import { CenterProps, FlexProps } from './style.types';

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

export const Row = styled.div<FlexProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;

	${({ full }) =>
		full &&
		css`
			& > :not(svg) {
				flex: 1;
			}
			flex: 1;
		`}
`;

export const Column = styled.div<FlexProps>`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	${({ full }) =>
		full &&
		css`
			& > * {
				flex: 1;
			}
		`}
`;

export const Flex1 = styled.div`
	flex: 1;
`;

export const End = styled.div`
	margin-left: auto;
`;

export const Center = styled.div<CenterProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	${({ fullHeight }) => fullHeight && `height: 100%`};
	${({ fullWidth }) => fullWidth && `width: 100%`};
`;
