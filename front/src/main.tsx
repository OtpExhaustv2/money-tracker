import AuthProvider from '@/utils/contexts/AuthContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

library.add(fas, far);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<AuthProvider>
					<App />
				</AuthProvider>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
);
