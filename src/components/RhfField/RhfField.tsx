import { UseFormRegister } from 'react-hook-form';
import styles from './RhfField.module.css';

type RhfFieldProps = {
	label: string;
	name: string;
	type: string;
	value?: any;
	register: UseFormRegister<any>;
	errors: any;
};
function RhfField({ label, name, type, register, errors, value }: RhfFieldProps) {
	return (
		<div className={styles.field}>
			<label className={styles.label} htmlFor={name}>
				{label}
			</label>

			<input className={styles.input} type={type} id={name} {...register(name)} value={value} />
			{errors[name] && <h5>{errors[name].message}</h5>}
		</div>
	);
}

export default RhfField;
