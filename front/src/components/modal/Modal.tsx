import * as S from '@/components/modal/modal.styles';
import { useOnClickOutside } from '@/hooks';
import { mergeObjects, ModalPositionX, ModalPositionY } from '@/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ConditionnalParent from '../ConditionnalParent';
import PortalModal from './PortalModal';

const defaultConfig: TModalConfig = {
	showHeader: false,
	showOverlay: true,
	positionX: ModalPositionX.center,
	positionY: ModalPositionY.center,
	contentPadding: '15px',
	allowClickOutside: true,
	size: 'sm',
	borderRadius: '10px',
};

interface ModalProps {}

export const modal: TModal = {
	show: () => {},
	hide: () => {},
	setConfig: () => {},
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
			config?: TModalConfig;
			children?: React.ReactNode;
		}) => {
			setChildren(params?.children);
			setConfig(mergeObjects(defaultConfig, params?.config));
			setShow(true);
		};
		modal.hide = () => {
			setShow(false);
		};
		modal.setConfig = (config: TModalConfig) => {
			setConfig((_) => mergeObjects(_, config));
		};
	}, []);

	useOnClickOutside(modalRef, handleClickOutside, config.allowClickOutside);

	useEffect(() => {
		if (show) {
			setShouldRender(true);

			document.addEventListener('keydown', handleKeyPress);
			return () => {
				document.removeEventListener('keydown', handleKeyPress);
			};
		}
	}, [handleKeyPress, show]);

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
							size={config?.size}
							borderRadius={config?.borderRadius}
							ref={modalRef}
							shouldRender={show}>
							<ConditionnalParent
								condition={!!config.onSubmit}
								parentIfTrue='form'
								parentIfTrueProps={{
									onSubmit: config!.onSubmit,
								}}
								parentIfFalse='div'>
								{(config.showHeader || config.title) && (
									<S.ModalHeader>
										<h3>
											{config.title} {config.showAsterisk ? '*' : ''}
										</h3>
									</S.ModalHeader>
								)}

								<S.ModalContent padding={config.contentPadding}>
									{children}
								</S.ModalContent>
								{config.showFooter && (
									<S.ModalFooter>
										<div>
											<input type='submit' />
										</div>
									</S.ModalFooter>
								)}
							</ConditionnalParent>
						</S.ModalContainer>
					</S.Overlay>
				</PortalModal>
			) : null}
		</>
	);
};

export default Modal;
