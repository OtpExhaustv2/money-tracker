import { usePanelContext } from '@/utils/contexts/PanelContext';
import { PanelContext } from '../panel/Panel';
import { InputContainer, InputField, InputLabel } from './input.style';

interface InputProps<T> {
	label?: string;
	fieldName: keyof T;
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
	const { row, setRowField } = usePanelContext<T>(PanelContext);
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
		setRowField?.(
			fieldName,
			typeof row?.[fieldName] === 'number'
				? e.target.valueAsNumber
				: e.target.value
		);
	};
	const value = row?.[fieldName];
	const type = typeof row?.[fieldName] === 'number' ? 'number' : 'text';

	return (
		<InputContainer>
			<InputLabel htmlFor={fieldName}>{label}</InputLabel>
			<InputField
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				id={fieldName}
				onChange={onChange}
				type={type}
			/>
		</InputContainer>
	);
};

export default Input;
