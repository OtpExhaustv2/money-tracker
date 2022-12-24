import { Modal, Sidebar } from '@/components';
import { AppContainer, MainContainer } from '@/utils';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface AppPageProps {}

const AppPage: React.FC<AppPageProps> = () => {
	return (
		<MainContainer>
			<Sidebar />
			<AppContainer>
				<Outlet />
			</AppContainer>
			<Modal />
		</MainContainer>
	);
};

export default AppPage;
