import { useQuery } from 'react-query';
import { getBankAccounts } from './utils/api';

function App() {
	const { data: bankAccounts } = useQuery('accounts', getBankAccounts);

	return (
		<div className='App'>
			{bankAccounts?.map((account: any) => (
				<div key={account.id}>
					{account.id} - {account.name}
				</div>
			))}
		</div>
	);
}

export default App;
