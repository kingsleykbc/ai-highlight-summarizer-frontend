import { ReactNode } from 'react';
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
interface HeadingProps {
	disabled: boolean;
	toggleDisabled: () => void;
}

const Popup = ({ children }: PopupProps) => {
	const { show, toggleShow, disabled, toggleDisabled } = useHighlights();

	return (
		<div data-testid='popup' className={styles.popup}>
			{show && (
				<div className={styles.content}>
					<Heading disabled={disabled} toggleDisabled={toggleDisabled} />
					<div className={styles.contentBody}>{children}</div>
				</div>
			)}
			<Button testID='toggleButton' className={styles.popupButton} onClick={toggleShow} label={show ? <CloseIcon /> : <SummaryIcon />} />
		</div>
	);
};

export default Popup;

const Heading = ({ disabled, toggleDisabled }: HeadingProps) => {
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
