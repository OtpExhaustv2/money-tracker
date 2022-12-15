import styled from 'styled-components';

export const SIDEBAR_WIDTH = 400;

export const HomeContainer = styled.div`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.color};
	transition: all 0.2s ease-in-out;
`;
