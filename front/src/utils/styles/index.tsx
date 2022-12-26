import styled from 'styled-components';

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

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;
