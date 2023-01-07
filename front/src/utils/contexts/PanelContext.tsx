import { createContext, useContext } from 'react';

export type TPanelContext<T> = {
	row: { [P in keyof T]: T[P] } | undefined;
	setRowField: TSetRowField<{ [P in keyof T]: T[P] } | undefined> | undefined;
};

export const createPanelContext = <T,>() => {
	return createContext<TPanelContext<T> | undefined>(undefined);
};

export const usePanelContext = <T,>(context: TCreatePanelContext) => {
	const c = useContext(context<T>());
	if (!c) {
		throw new Error(
			'usePanelContext must be used within a PanelContext.Provider'
		);
	}

	return c;
};

export type TCreatePanelContext = typeof createPanelContext;
