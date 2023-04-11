import { createContext, useContext, useState, useEffect } from 'react';
import { HighlightDataType, HighlightsFetchFiltersType } from '../services/highlights';
import { dummyHighlights } from '../utils/mock';
import { AuthContextType } from './AuthContext';

interface HighlightsProviderProps {
	children: React.ReactNode;
	authState: AuthContextType;
}

export interface HighlightsContextType {
	highlights: HighlightDataType[] | null;
	refetchHighlights: (filters?: HighlightsFetchFiltersType) => void;
	deleteHighlight: (id: string) => void;
	changeLabel: (newLabel: string) => void;
	loading: boolean;
	error: string | null;
}

export const HighlightsContext = createContext<HighlightsContextType>({
	highlights: null,
	refetchHighlights: () => null,
	deleteHighlight: () => null,
	changeLabel: () => null,
	loading: false,
	error: null
});

export const useHighlights = () => useContext(HighlightsContext);

export function HighlightsProvider({ authState, children }: HighlightsProviderProps) {
	const [highlights, setHighlights] = useState<HighlightDataType[] | null>(null);
	const [filters, setFilters] = useState<HighlightsFetchFiltersType | null>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchHighlights = async (newFilters?: HighlightsFetchFiltersType) => {
		setLoading(true);
		setError(null);
		try {
			let queryFilters = filters;
			if (newFilters) {
				queryFilters = newFilters;
				setFilters(newFilters);
			}

			// TODO: hANDLE FETCH HERE
			setHighlights(dummyHighlights);
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
	};

	const changeLabel = async (newLabel: string) => {
		setLoading(true);
		setError(null);
		try {
			// TODO: hANDLE FETCH HERE
			fetchHighlights();
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
	};

	const deleteHighlight = async (id: string) => {
		setLoading(true);
		setError(null);
		try {
			// TODO: hANDLE FETCH HERE
			fetchHighlights();
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchHighlights();
		setLoading(false);
	}, []);

	const values = {
		loading,
		error,
		highlights,
		changeLabel,
		deleteHighlight,
		refetchHighlights: fetchHighlights
	};

	return <HighlightsContext.Provider value={values}>{children}</HighlightsContext.Provider>;
}
