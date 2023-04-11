import Text from '../Text/Text';
import styles from './Loader.module.css';

export interface LoaderProps {
	message?: string;
	containerClassName?: string;
	color?: string;
}

const Loader = ({ message, containerClassName = '', color }: LoaderProps) => {
	return (
		<div className={[styles.loaderContainer, containerClassName].join(' ')}>
			<div className={styles.loader}>
				<DotLoader color={color} />
			</div>
			{message && (
				<Text color='gray' weight='semibold' className={styles.message}>
					{message}
				</Text>
			)}
		</div>
	);
};

export default Loader;

export const DotLoader = ({ color = '#A76DFF', className = '' }: { color?: string; className?: string }) => {
	const spanStyle = {
		backgroundColor: color
	};

	return (
		<div className={[styles.dotLoader, className].join(' ')}>
			<div className={styles.dot}>
				<span style={spanStyle} />
			</div>
			<div className={styles.dot}>
				<span style={spanStyle} />
			</div>
			<div className={styles.dot}>
				<span style={spanStyle} />
			</div>
		</div>
	);
};
