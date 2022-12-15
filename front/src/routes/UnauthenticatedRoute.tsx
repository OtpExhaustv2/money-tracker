import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/contexts';

interface UnauthenticatedRouteProps {}

const UnauthenticatedRoute: React.FC<UnauthenticatedRouteProps> = () => {
	const { user, isLoading } = useAuth();

	if (isLoading) return null;

	return !user ? <Outlet /> : <Navigate to='..' />;
};

export default UnauthenticatedRoute;
