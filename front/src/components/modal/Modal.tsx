import * as S from '@/components/modal/modal.styles';
import { useOnClickOutside } from '@/hooks';
import {
	Flex1,
	mergeObjects,
	ModalPositionX,
	ModalPositionY,
	Row,
} from '@/utils';
import { AnimatePresence, Variants } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ConditionnalParent from '../ConditionnalParent';
import Icon from '../Icon';
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

const overlayVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const modalVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -100,
		transition: {
			duration: 0.2,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2,
		},
	},
};

const Modal: React.FC<ModalProps> = () => {
	const [children, setChildren] = useState<React.ReactNode>(null);
	const [config, setConfig] = useState<TModalConfig>(defaultConfig);
	const [show, setShow] = useState(false);
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
			document.addEventListener('keydown', handleKeyPress);
			return () => {
				document.removeEventListener('keydown', handleKeyPress);
			};
		}
	}, [handleKeyPress, show]);

	return (
		<AnimatePresence initial={false} mode='wait'>
			{show && (
				<PortalModal wrapperId='modal-portal'>
					<S.Overlay
						showOverlay={config.showOverlay}
						positionX={config.positionX}
						positionY={config.positionY}
						variants={overlayVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'>
						<S.ModalContainer
							size={config?.size}
							borderRadius={config?.borderRadius}
							ref={modalRef}
							variants={modalVariants}
							initial='hidden'
							animate='visible'
							exit='hidden'>
							<ConditionnalParent
								condition={!!config.onSubmit}
								parentIfTrue='form'
								parentIfTrueProps={{
									onSubmit: config!.onSubmit,
								}}
								parentIfFalse='div'>
								{(config.showHeader || config.title) && (
									<S.ModalHeader>
										<Row full>
											<h3>
												{config.title} {config.showAsterisk ? '*' : ''}
											</h3>
											<Flex1 />
											<Icon
												icon='close'
												size='1x'
												style={{
													cursor: 'pointer',
													padding: '5px',
												}}
												onClick={() => modal.hide()}
											/>
										</Row>
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
			)}
		</AnimatePresence>
	);
};

export default Modal;
