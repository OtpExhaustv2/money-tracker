import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/contexts';

interface PrivateRoutesProps {}

const PrivateRoutes: React.FC<PrivateRoutesProps> = () => {
	const { user, isLoading } = useAuth();

	if (isLoading) return null;

	return user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
