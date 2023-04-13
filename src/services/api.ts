import axios, { AxiosError, Method } from 'axios';
import Cookies from 'js-cookie';

const BACKEND_URL = 'http://localhost:8090';

interface ApiParamsType {
	method: Method;
	path: string;
	url?: string;
	data?: Record<string, any>;
	token?: string;
	query?: Record<string, any>;
}

export async function apiFetch<T>({
	url = BACKEND_URL,
	path,
	method,
	token = Cookies.get('user'),
	data: bodyData,
	query = {}
}: ApiParamsType): Promise<T> {
	try {
		const response = await axios({
			url: url + path,
			method,
			headers: { Authorization: `Bearer ${token}` },
			data: bodyData,
			params: query
		});
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError<any>;
			if (axiosError.response) {
				const { data = {}, status, statusText } = axiosError.response;
				const { message, error } = data;
				if (data && (message || error)) {
					throw new Error(message || error);
				}
				throw new Error(`Request failed with status ${status}: ${statusText}`);
			}
		}
		throw error;
	}
}
