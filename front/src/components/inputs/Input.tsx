import { Path, UseFormReturn } from 'react-hook-form';
import { InputContainer, InputField, InputLabel } from './input.style';

interface InputProps<T extends Record<string, any>> {
	label?: string;
	type?: 'text' | 'number' | 'date';
	fieldName: Path<T>;
	register: UseFormReturn<T>['register'];
	placeholder?: string;
	format?: (value: any) => void;
}

const Input = <T extends Record<string, any>>({
	label,
	type = 'text',
	fieldName,
	register,
	placeholder,
	format,
}: InputProps<T>) => {
	const options =
		type === 'number'
			? {
					valueAsNumber: true,
					onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
						format?.(e.target.valueAsNumber);
					},
			  }
			: {
					onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
						format?.(e.target.value);
					},
			  };

	return (
		<InputContainer>
			<InputLabel htmlFor={fieldName}>{label}</InputLabel>
			<InputField
				{...register(fieldName, options)}
				type={type}
				placeholder={placeholder}
				id={fieldName}
			/>
		</InputContainer>
	);
};

export default Input;
