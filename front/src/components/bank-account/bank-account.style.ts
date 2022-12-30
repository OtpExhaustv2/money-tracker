import { BankAccountCardProps } from '@/utils/styles/style.types';
import styled from 'styled-components';

export const BankAccountContainer = styled.div`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	gap: 1rem;
`;

export const BankAccountCard = styled.div<BankAccountCardProps>`
	background-color: ${({ theme }) => theme.background.secondary};
	padding: 1rem;
	border-radius: ${({ theme }) => theme.card.borderRadius};
	cursor: ${({ showCursor = true }) => (showCursor ? 'pointer' : 'default')};
	transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
		box-shadow 0.3s ease-in-out;
	overflow: hidden;
	border: 1px solid
		${({ isFavorite, theme }) =>
			isFavorite
				? theme.card.borderColor.selected
				: theme.card.borderColor.unselected};

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

export const BankAccountCardAdd = styled.div`
	background-color: rgba(0 0 0 / 20%);
	padding: 4rem;
	border-radius: ${({ theme }) => theme.card.borderRadius};
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: rgba(0 0 0 / 17%);

		& > svg {
			color: #fff;
		}
	}

	& > svg {
		color: rgba(255 255 255 / 50%);
		transition: color 0.2s ease-in-out;
	}
`;
