import AppPage from '@/AppPage';
import { useTheme } from '@/hooks';
import { BankAccounts, Home } from '@/pages/app';
import { Login, Register } from '@/pages/auth';
import { AuthenticatedRoute, UnauthenticatedRoute } from '@/routes';
import { DarkTheme, LightTheme } from '@/utils';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider
			theme={theme ? (theme === 'dark' ? DarkTheme : LightTheme) : DarkTheme}>
			<Routes>
				<Route element={<AuthenticatedRoute children={<AppPage />} />}>
					<Route path='/' element={<Home />} />
					<Route path='/bank-accounts' element={<BankAccounts />} />
				</Route>
				<Route element={<UnauthenticatedRoute />}>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
