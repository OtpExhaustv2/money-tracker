import { usePanelContext } from '@/utils/contexts/PanelContext';
import { InputContainer, InputField, InputLabel } from './input.style';

interface InputProps<T> {
	label?: string;
	fieldName: Extract<keyof T, string>;
	placeholder?: string;
	format?: (value: any) => void;
	disabled?: boolean;
}

const Input = <T,>({
	label,
	fieldName,
	placeholder,
	disabled,
	format,
}: InputProps<T>) => {
	const { row, setRowField } = usePanelContext<T>();
	// const options =
	// 	type === 'number'
	// 		? {
	// 				valueAsNumber: true,
	// 				onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
	// 					format?.(e.target.valueAsNumber);
	// 				},
	// 		  }
	// 		: {
	// 				onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
	// 					format?.(e.target.value);
	// 				},
	// 		  };

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRowField?.(fieldName, e.target.value);
	};

	return (
		<InputContainer>
			<InputLabel htmlFor={fieldName}>{label}</InputLabel>
			<InputField
				// {...register(fieldName, options)}
				placeholder={placeholder}
				disabled={disabled}
				id={fieldName}
				onChange={onChange}
			/>
		</InputContainer>
	);
};

export default Input;
