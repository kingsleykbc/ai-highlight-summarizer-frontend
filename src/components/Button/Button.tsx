import classnames from 'classnames';
import styles from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
	label: string | ReactNode;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	loading?: boolean;
}

const Button = ({ label, onClick, className: cName = '', disabled = false, loading = false }: ButtonProps) => {
	const className = classnames({ disabled: styles.disabled, loading: styles.loading }, [styles.button, cName]);
	return (
		<button onClick={onClick} disabled={disabled || loading} className={className}>
			{loading ? 'Loading...' : label}
		</button>
	);
};

export default Button;
