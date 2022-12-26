import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void,
	allowClickOutside?: boolean
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			const el = ref?.current;
			if (!el || el.contains((event?.target as Node) || null)) return null;
			if (!allowClickOutside) return null;

			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
