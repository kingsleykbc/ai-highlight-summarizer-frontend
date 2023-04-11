import classnames from 'classnames';
import styles from './Button.module.css';
import { ReactNode } from 'react';
import { DotLoader } from '../Loader/Loader';

interface ButtonProps {
	label: string | ReactNode;
	color?: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	loading?: boolean;
}

const Button = ({ label, onClick, color, className: cName = '', disabled = false, loading = false }: ButtonProps) => {
	const className = classnames({ disabled: styles.disabled, loading: styles.loading }, [styles.button, cName]);
	return (
		<button style={{ backgroundColor: color }} onClick={onClick} disabled={disabled || loading} className={className}>
			{loading ? <DotLoader className={styles.loader} color='white' /> : label}
		</button>
	);
};

export default Button;
