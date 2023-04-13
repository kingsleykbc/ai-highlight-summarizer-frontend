import { apiFetch } from './api';

export type LoginType = {
	access_token: string;
};

export type LoginParam = {
	email: string;
	password: string;
};

export type SignupParam = LoginParam & {
	name: string;
};

export function login(data: LoginParam) {
	return apiFetch<LoginType>({ method: 'POST', data, path: '/login' });
}

export function signup(data: SignupParam) {
	return apiFetch<LoginType>({ method: 'POST', data, path: '/signup' });
}
