import { PanelContext } from '@/utils/contexts/PanelContext';
import { PropsWithChildren, useEffect, useState } from 'react';
import { UseMutateFunction } from 'react-query';
import { modal } from '../modal/Modal';

const setRowFieldToSetValue: <T>(
	fieldName: keyof T,
	setRowField?: TRowSetter<T>
) => ((value: T[keyof T]) => void) | undefined = <T,>(
	fieldName: keyof T,
	setRowField?: TRowSetter<T>
) =>
	setRowField
		? (value: T[keyof T]) => {
				setRowField((_row) => ({ ..._row, [fieldName]: value }));
		  }
		: undefined;

const setRowToSetRowField: <T>(
	setRow?: TRowSetter<T>
) => TSetRowField<T> | undefined = <T,>(setRow?: TRowSetter<T>) =>
	setRow
		? (fieldName: keyof T, value: T[keyof T]) => {
				setRowFieldToSetValue(fieldName, setRow)!(value);
		  }
		: undefined;

interface PanelProps<T> {
	panel: IPanel<T>;
}

interface IPanelParams<T> {
	row: { [P in keyof T]: T[P] } | undefined;
	create: UseMutateFunction<any, unknown, T, unknown>;
	update: UseMutateFunction<any, unknown, T, unknown>;
	action: TAction;
}

interface IPanel<T> {
	action: TAction;
	row: { [P in keyof T]: T[P] } | undefined;
	isDirty: boolean;
	setRowField: TSetRowField<{ [P in keyof T]: T[P] } | undefined> | undefined;
}

export const Panel = <T,>({
	panel,
	children,
}: PanelProps<T> & PropsWithChildren) => {
	return (
		<PanelContext.Provider
			value={{
				row: panel.row,
				setRowField: panel.setRowField,
			}}>
			{children}
		</PanelContext.Provider>
	);
};

export const usePanel: <T extends Record<string, any>>(
	params: IPanelParams<T>
) => IPanel<T> = <T,>(params: IPanelParams<T>) => {
	const [localRow, setLocalRow] = useState(params.row);

	const isDirty = JSON.stringify(localRow) !== JSON.stringify(params.row);

	useEffect(() => {
		modal.setConfig({
			showAsterisk: params.action === 'update' ? isDirty : false,
			onSubmit: onSubmit,
			size: 'xl',
		});
	}, [isDirty]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (params.action === 'update' && !isDirty) {
			return modal.hide();
		}
		(params.action === 'create' ? params.create : params.update)(localRow as T);
	};

	return {
		action: params.action,
		row: params.row,
		isDirty: isDirty,
		setRowField:
			params.action === 'view' ? undefined : setRowToSetRowField(setLocalRow),
	};
};
