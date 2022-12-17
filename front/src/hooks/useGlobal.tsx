import { useMutation, useQuery, useQueryClient } from 'react-query';

let global: Global = {
	theme: 'dark',
};

const useGlobal = () => {
	const queryClient = useQueryClient();
	const { data } = useQuery('global', () => global);
	const { mutate } = useMutation(
		async (cb: (oldGlobal: Global) => Global) => {
			global = cb(global);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('global');
			},
		}
	);

	return { globalState: data, setGlobalState: mutate };
};

export default useGlobal;
