import { Path, UseFormReturn } from 'react-hook-form';
import { InputContainer } from './input.style';

interface InputProps<T extends Record<string, any>> {
	label?: string;
	fieldName: Path<T>;
	register: UseFormReturn<T>['register'];
}

const Input = <T extends Record<string, any>>({
	label,
	fieldName,
	register,
}: InputProps<T>) => {
	return (
		<InputContainer>
			<label>{label}</label>
			<input {...register(fieldName)} />
		</InputContainer>
	);
};

export default Input;
