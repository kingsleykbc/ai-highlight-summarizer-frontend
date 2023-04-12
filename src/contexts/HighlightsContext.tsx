import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { HighlightDataType, HighlightsFetchFiltersType } from '../services/highlights';
import { delay, dummyHighlights } from '../utils/mock';
import { AuthContextType } from './AuthContext';

interface HighlightsProviderProps {
	children: React.ReactNode;
	authState: AuthContextType;
}

export interface HighlightsContextType {
	highlights: HighlightDataType[] | null;
	generateSummary: (text: string) => void;
	refetchHighlights: (filters?: HighlightsFetchFiltersType) => void;
	deleteHighlight: (id: string) => void;
	changeHighlightLabel: (newLabel: string) => void;
	disabled: boolean;
	toggleDisabled: () => void;
	loading: boolean;
	error: string | null;
}

export const HighlightsContext = createContext<HighlightsContextType>({
	highlights: null,
	generateSummary: () => null,
	refetchHighlights: () => null,
	deleteHighlight: () => null,
	changeHighlightLabel: () => null,
	toggleDisabled: () => null,
	disabled: false,
	loading: false,
	error: null
});

export const useHighlights = () => useContext(HighlightsContext);

export function HighlightsProvider({ authState, children }: HighlightsProviderProps) {
	const [highlights, setHighlights] = useState<HighlightDataType[] | null>(null);
	const [filters, setFilters] = useState<HighlightsFetchFiltersType | null>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const toggleDisabled = () => setDisabled(!disabled);

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

			const newHighlights = await delay<HighlightDataType[]>(() => dummyHighlights, 1000);
			setHighlights(newHighlights);
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
	};

	const generateSummary = async (text: string) => {
		setLoading(true);
		setError(null);
		try {
			// TODO: hANDLE FETCH HERE
			await fetchHighlights();
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
	};

	const changeHighlightLabel = async (newLabel: string) => {
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
			await fetchHighlights();
		} catch (e: any) {
			setError(e.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchHighlights();
	}, []);

	const values = useMemo(
		() => ({
			loading,
			error,
			highlights,
			generateSummary,
			changeHighlightLabel,
			disabled,
			toggleDisabled,
			deleteHighlight,
			refetchHighlights: fetchHighlights
		}),
		[loading, error, highlights, disabled]
	);

	return <HighlightsContext.Provider value={values}>{children}</HighlightsContext.Provider>;
}
