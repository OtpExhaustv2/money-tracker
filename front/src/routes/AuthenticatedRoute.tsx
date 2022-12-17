import React, { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/contexts';

interface AuthenticatedRouteProps extends PropsWithChildren {}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
	children,
}) => {
	const location = useLocation();
	const { user, isLoading } = useAuth();

	if (isLoading) return null;

	if (user) return <>{children}</>;

	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default AuthenticatedRoute;
