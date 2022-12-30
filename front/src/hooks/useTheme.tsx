import { useGlobal } from '@/utils';
import { useEffect } from 'react';

const useTheme = () => {
	const { theme, setTheme } = useGlobal();

	useEffect(() => {
		if (theme) {
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return { theme, setTheme, toggleTheme };
};

export default useTheme;
