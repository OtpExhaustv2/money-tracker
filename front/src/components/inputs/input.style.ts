import styled from 'styled-components';

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputLabel = styled.label`
	font-size: 1rem;
	font-weight: 500;
`;

export const InputField = styled.input`
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 0.5rem;
	font-size: 0.8rem;
	font-weight: 400;
	outline: none;

	&:focus {
		border: 1px solid red;
	}
`;
