import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { getLocalStorage } from '../helpers';

type TGlobalStateContext = {
	theme: SelectableTheme;
	setTheme: (theme: SelectableTheme) => void;
};

const GlobalStateContext = createContext<TGlobalStateContext | undefined>(
	undefined
);

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [theme, setTheme] = useState<SelectableTheme>(
		() => (getLocalStorage('theme') as SelectableTheme) ?? 'dark'
	);

	return (
		<GlobalStateContext.Provider value={{ theme, setTheme }}>
			{children}
		</GlobalStateContext.Provider>
	);
};

export const useGlobal = () => {
	const c = useContext(GlobalStateContext);
	if (!c) {
		throw new Error('useGlobal must be used within a GlobalStateProvider');
	}
	return c;
};
