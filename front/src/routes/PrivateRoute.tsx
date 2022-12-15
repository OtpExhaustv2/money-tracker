import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/contexts';

interface PrivateRouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
	const { user, isLoading } = useAuth();

	if (isLoading) return null;

	return user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
