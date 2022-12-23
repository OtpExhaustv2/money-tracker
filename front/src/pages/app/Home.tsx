import { BankAccounts } from '@/components';
import Modal from '@/components/modal/Modal';
import {
	ModalPositionX,
	ModalPositionY,
} from '@/components/modal/modal.interface';
import React, { useState } from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<h1>Tableau de bord</h1>
			<BankAccounts />

			<button onClick={() => setShowModal((_) => !_)}>Toggle</button>
			<Modal
				show={showModal}
				setShow={setShowModal}
				config={{
					title: 'Modal Header 1',
					showHeader: true,
					showOverlay: true,
					positionX: ModalPositionX.center,
					positionY: ModalPositionY.center,
					padding: '20px',
				}}>
				<div>test</div>
			</Modal>
		</>
	);
};

export default Home;
