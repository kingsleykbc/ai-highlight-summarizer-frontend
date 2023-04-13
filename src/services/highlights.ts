import { apiFetch } from './api';

export type HighlightDataType = {
	_id: string;
	text?: string;
	summary: string;
	createdAt: Date;
	label: string;
	tags: string[];
};

export type SortByType = 'newest' | 'oldest';

export type HighlightsFetchFiltersType = {
	tags: string[];
	sortBy: SortByType;
};

export function getHighights(query?: HighlightsFetchFiltersType) {
	return apiFetch<HighlightDataType[]>({ method: 'GET', path: '/highlights', query });
}

export function getSummary(text: string) {
	return apiFetch<HighlightDataType>({ method: 'POST', path: '/highlights/summarize', data: { text } });
}

export function updateHighlightLabel(id: string, label: string) {
	return apiFetch<HighlightDataType>({ method: 'PUT', path: '/highlights', data: { id, label } });
}

export function removeHighlight(id: string) {
	return apiFetch<HighlightDataType>({ method: 'DELETE', path: `/highlights/${id}` });
}
