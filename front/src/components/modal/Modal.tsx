import { useOnClickOutside } from '@/hooks';
import React, {
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { ModalConfig } from './modal.interface';
import PortalModal from './PortalModal';
import * as S from './styles';

interface ModalProps extends PropsWithChildren {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	config: ModalConfig;
}

const Modal: React.FC<ModalProps> = ({ show, setShow, children, config }) => {
	const [shouldRender, setShouldRender] = useState(show);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = () => {
		setShow(false);
	};

	const handleKeyPress = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setShow(false);
		}
	}, []);

	useOnClickOutside(modalRef, handleClickOutside);

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
