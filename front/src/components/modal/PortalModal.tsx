import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalModalProps extends PropsWithChildren {
	wrapperId: string;
}

const PortalModal: React.FC<PortalModalProps> = ({ children, wrapperId }) => {
	const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId) as HTMLElement;
		let portalCreated = false;
		if (!element) {
			element = createWrapperAndAppendToBody();
			portalCreated = true;
		}

		setPortalElement(element);

		return () => {
			if (portalCreated && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	const createWrapperAndAppendToBody = () => {
		const element = document.createElement('div');
		element.setAttribute('id', wrapperId);
		document.body.appendChild(element);
		return element;
	};

	if (!portalElement) return null;

	return createPortal(children, portalElement);
};

export default PortalModal;
