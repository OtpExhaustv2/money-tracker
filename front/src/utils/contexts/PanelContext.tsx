import { createContext, useContext } from 'react';

type TPanelContext<T> = {
	row: { [P in keyof T]: T[P] } | undefined;
	setRowField: TSetRowField<{ [P in keyof T]: T[P] } | undefined> | undefined;
};

export const PanelContext = createContext<TPanelContext<any> | undefined>(
	undefined
);

export const usePanelContext = <T,>() => {
	const context = useContext(PanelContext);
	if (context === undefined) {
		throw new Error('usePanelContext must be used within a PanelContext');
	}
	return context as TPanelContext<T>;
};
