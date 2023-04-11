import Text from '../Text/Text';
import styles from './Error.module.css';
import { BiErrorAlt as ErrorIcon } from 'react-icons/bi';
export interface ErrorProps {
	message: string;
	containerClassName?: string;
}

const Error = ({ message, containerClassName = '' }: ErrorProps) => {
	return (
		<div className={[styles.errorContainer, containerClassName].join(' ')}>
			<div className={styles.error}>
				<ErrorIcon className={styles.errorIcon} />
			</div>
			<Text weight='semibold' className={styles.message}>
				{message}
			</Text>
		</div>
	);
};

export default Error;
