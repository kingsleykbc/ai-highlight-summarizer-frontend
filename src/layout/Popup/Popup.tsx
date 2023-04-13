import { ReactNode, useState } from 'react';
import styles from './Popup.module.css';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { MdOutlineSummarize as SummaryIcon } from 'react-icons/md';
import { BiHide as CloseIcon } from 'react-icons/bi';
import { MdOutlineLogout as LogoutIcon } from 'react-icons/md';
import { useHighlights } from '../../contexts/HighlightsContext';
import { useAuth } from '../../contexts/AuthContext';

export interface PopupProps {
	children: ReactNode;
}
const Popup = ({ children }: PopupProps) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(!show);

	return (
		<div className={styles.popup}>
			{show && (
				<div className={styles.content}>
					<Heading />
					<div className={styles.contentBody}>{children}</div>
				</div>
			)}
			<Button className={styles.popupButton} onClick={toggleShow} label={show ? <CloseIcon /> : <SummaryIcon />} />
		</div>
	);
};

export default Popup;

const Heading = () => {
	const { disabled, toggleDisabled } = useHighlights();
	const { user, logout } = useAuth();

	if (!user) {
		return null;
	}

	return (
		<div className={styles.titleSection}>
			<Text tag='h3'>Hi, {user.name.split(' ')[0]}</Text>
			<div className={styles.buttons}>
				<Button label={disabled ? 'Enable' : 'Disable'} color={disabled ? '#49c994' : '#eb525c'} onClick={toggleDisabled} />
				<Button label={<LogoutIcon />} className={styles.logoutButton} onClick={logout} />
			</div>
		</div>
	);
};
