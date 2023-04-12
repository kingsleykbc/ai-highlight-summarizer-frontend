import { ReactNode } from 'react';
import styles from './Modal.module.css';
import Text from '../Text/Text';
import Portal from '../Portal/Portal';

type ModalProps = {
	children: ReactNode;
	title?: string | ReactNode;
	width?: string | number;
	height?: string | number;
	show: boolean;
	toggle: () => void;
};

const Modal = ({ children, show, toggle, title, width, height }: ModalProps) => {
	if (!show) return null;

	const titleWidget =
		typeof title === 'string' ? (
			<Text tag='h3' weight='semibold'>
				{title}
			</Text>
		) : (
			title
		);

	return (
		<Portal>
			<div className={styles.modal}>
				<div className={styles.back} onClick={toggle} />
				<div style={{ width, height }} className={styles.box}>
					<div className={styles.topSection}>
						<div>{titleWidget}</div>
						<button className={styles.closeButton} onClick={toggle}>
							&times;
						</button>
					</div>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
