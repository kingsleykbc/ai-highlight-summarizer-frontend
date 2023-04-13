import * as Yup from 'yup';

const loginShape = {
	email: Yup.string().email('Invalid URL format').required('email is required'),
	password: Yup.string().min(6, 'password must be at least 6 characters').required('password is required')
};

export const loginSchema = Yup.object().shape(loginShape);
export const signupSchema = Yup.object().shape({ ...loginShape, name: Yup.string().required('name is required') });
