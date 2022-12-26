import { useRef } from 'react';

const useIsDirty = <T,>(data: T, watchWith: T) => {
	const initialValues = useRef(data);

	return JSON.stringify(initialValues.current) !== JSON.stringify(watchWith);
};

export default useIsDirty;
