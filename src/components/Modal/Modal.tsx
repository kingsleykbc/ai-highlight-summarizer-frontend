import { ReactNode } from 'react';
import styles from './Modal.module.css';

type ModalProps = {
	children: ReactNode;
	width?: string | number;
	height?: string | number;
	show: boolean;
	toggle: () => void;
};

const Modal = ({ children, show, toggle }: ModalProps) => {
	if (!show) return null;

	return (
		<div className={styles.modal}>
			<div className={styles.screen}>
				<div className={styles.back} onClick={toggle} />
				<div className={styles.box}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
