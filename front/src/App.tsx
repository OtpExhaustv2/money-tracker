import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import Home from './pages/app/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const App = () => {
	return (
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path='/' element={<Home />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='*' element={<h1>404</h1>} />
		</Routes>
	);
};

export default App;
