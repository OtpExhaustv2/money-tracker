import styled from 'styled-components';

export const BankAccountContainer = styled.div`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	gap: 1rem;
`;

export const BankAccountCard = styled.div`
	background-color: ${({ theme }) => theme.background.secondary};
	padding: 1rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	overflow: hidden;

	&:hover {
		box-shadow: 0.5rem 0.5rem 5px 0 rgba(0 0 0 / 20%);
		transform: translateY(-0.2rem);
	}
`;

export const BankAccountCardHeader = styled.div`
	display: flex;
	margin-bottom: 1rem;
`;

export const BankAccountCardHeaderTitle = styled.div`
	display: flex;
	flex-direction: column;

	& > h2 {
		font-size: 1.2rem;
	}

	& > h3 {
		font-size: 1rem;
		font-weight: 700;
	}

	& > span {
		font-size: 0.9rem;
	}
`;

export const BankAccountCardHeaderActions = styled.div`
	margin-left: auto;
	display: flex;
	gap: 0.5rem;

	& > *:hover {
		color: red;
	}
`;

export const BankAccountFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
