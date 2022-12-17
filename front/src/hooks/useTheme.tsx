import { useEffect } from 'react';
import { getLocalStorage } from '../utils/helpers';
import useGlobal from './useGlobal';

const useTheme = () => {
	const { globalState, setGlobalState } = useGlobal();

	useEffect(() => {
		const storedTheme = getLocalStorage('theme') as SelectableTheme;
		if (storedTheme) {
			setGlobalState((_) => ({ ..._, theme: storedTheme }));
		}
	}, []);

	useEffect(() => {
		if (globalState?.theme) {
			localStorage.setItem('theme', globalState?.theme);
		}
	}, [globalState?.theme]);

	const toggleTheme = () => {
		setGlobalState((_) => ({
			..._,
			theme: globalState?.theme === 'dark' ? 'light' : 'dark',
		}));
	};

	const setTheme = (theme: SelectableTheme) => {
		setGlobalState((_) => ({ ..._, theme }));
	};

	return { theme: globalState?.theme, setTheme, toggleTheme };
};

export default useTheme;
