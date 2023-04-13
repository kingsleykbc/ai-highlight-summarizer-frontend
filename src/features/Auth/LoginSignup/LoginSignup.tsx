import RhfField from '../../../components/RhfField/RhfField';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';
import { loginSchema, signupSchema } from './LoginSignup.model';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button/Button';
import styles from './LoginSignup.module.css';
import Text from '../../../components/Text/Text';

const LoginSignup = () => {
	const [formType, setFormType] = useState<'login' | 'signup'>('login');
	const { loading, error, login, signup } = useAuth();
	const config = {
		login: {
			schema: loginSchema,
			buttonLabel: 'Login',
			action: login
		},
		signup: {
			schema: signupSchema,
			buttonLabel: 'Sign up',
			action: signup
		}
	};

	const formComponent = config[formType];

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<any>({
		resolver: yupResolver(formComponent.schema)
	});

	const onSubmit = (data: any) => {
		formComponent.action(data);
	};

	return (
		<div className={styles.loginSignup}>
			<Text tag='h2' className={styles.welcomeMessage}>
				Login to summarize and store highlights.
			</Text>
			<div className={styles.tab}>
				<button className={formType === 'login' ? styles.active : ''} onClick={() => setFormType('login')}>
					Login
				</button>
				<button className={formType === 'signup' ? styles.active : ''} onClick={() => setFormType('signup')}>
					Sign Up
				</button>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{formType === 'signup' && <RhfField label='Full name' name='name' type='name' register={register} errors={errors} />}
				<RhfField label='Email' name='email' type='email' register={register} errors={errors} />
				<RhfField label='Password' name='password' type='password' register={register} errors={errors} />

				{error && <h5>{error}</h5>}
				<Button className={styles.submitButton} loading={loading} label={formComponent.buttonLabel} />
			</form>
		</div>
	);
};

export default LoginSignup;
