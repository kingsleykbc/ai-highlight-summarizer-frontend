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
