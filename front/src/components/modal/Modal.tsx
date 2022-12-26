import { useOnClickOutside } from '@/hooks';
import { mergeObjects, ModalPositionX, ModalPositionY } from '@/utils';
import * as S from '@/utils/styles/modal.styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import PortalModal from './PortalModal';

const defaultConfig: TModalConfig = {
	title: 'Modal Header 1',
	showHeader: true,
	showOverlay: true,
	positionX: ModalPositionX.center,
	positionY: ModalPositionY.center,
	padding: '20px',
	allowClickOutside: true,
};

interface ModalProps {}

export const modal: TModal = {
	show: () => {},
	hide: () => {},
};

const Modal: React.FC<ModalProps> = () => {
	const [children, setChildren] = useState<React.ReactNode>(null);
	const [config, setConfig] = useState<TModalConfig>(defaultConfig);
	const [show, setShow] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = () => {
		setShow(false);
	};

	const handleKeyPress = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setShow(false);
		}
	}, []);

	useEffect(() => {
		modal.show = (params?: {
			config?: Partial<TModalConfig>;
			children?: React.ReactNode;
		}) => {
			setChildren(params?.children);
			setConfig(mergeObjects(defaultConfig, params?.config));
			setShow(true);
		};
		modal.hide = () => setShow(false);
	}, []);

	useOnClickOutside(modalRef, handleClickOutside, config.allowClickOutside);

	useEffect(() => {
		if (show) {
			document.addEventListener('keydown', handleKeyPress);
			return () => {
				document.removeEventListener('keydown', handleKeyPress);
			};
		}
	}, [handleKeyPress, show]);

	useEffect(() => {
		if (show) {
			setShouldRender(true);
		}
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) {
			setShouldRender(false);
		}
	};

	return (
		<>
			{shouldRender ? (
				<PortalModal wrapperId='modal-portal'>
					<S.Overlay
						showOverlay={config.showOverlay}
						positionX={config.positionX}
						positionY={config.positionY}
						shouldRender={show}
						onAnimationEnd={onAnimationEnd}>
						<S.ModalContainer
							padding={config.padding}
							ref={modalRef}
							shouldRender={show}>
							{config.showHeader && (
								<S.ModalHeader>
									<h3>{config.title}</h3>
								</S.ModalHeader>
							)}

							<S.Close onClick={() => setShow(!show)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-x'
									viewBox='0 0 16 16'>
									<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
								</svg>
							</S.Close>

							<S.Content>{children}</S.Content>
						</S.ModalContainer>
					</S.Overlay>
				</PortalModal>
			) : null}
		</>
	);
};

export default Modal;
