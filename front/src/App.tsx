import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import Home from './pages/app/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { PrivateRoute, UnauthenticatedRoute } from './routes';
import { DarkTheme, LightTheme } from './utils/themes';

const App = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider
			theme={theme ? (theme === 'dark' ? DarkTheme : LightTheme) : DarkTheme}>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
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
