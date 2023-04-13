import { apiFetch } from './api';

export type UserType = {
	_id: string;
	name: string;
	email: string;
	createdAt: Date;
};

export function getUserProfile(token?: string) {
	return apiFetch<UserType>({ method: 'GET', path: '/users/profile', token });
}
