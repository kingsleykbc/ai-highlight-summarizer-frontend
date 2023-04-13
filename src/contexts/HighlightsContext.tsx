import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
	HighlightDataType,
	HighlightsFetchFiltersType,
	getHighights,
	getSummary,
	removeHighlight,
	updateHighlightLabel
} from '../services/highlights';
import { AuthContextType } from './AuthContext';
import { useSnackbar } from './SnackbarContext';

interface HighlightsProviderProps {
	children: React.ReactNode;
	authState: AuthContextType;
}

export interface HighlightsContextType {
	highlights: HighlightDataType[] | null;
	generateSummary: (text: string) => void;
	refetchHighlights: (filters?: HighlightsFetchFiltersType) => void;
	deleteHighlight: (id: string) => void;
	changeHighlightLabel: (id: string, newLabel: string) => void;
	disabled: boolean;
	toggleDisabled: () => void;
	show: boolean;
	toggleShow: () => void;
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
	toggleShow: () => null,
	show: false,
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
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(!show);
	const { showSnackbar } = useSnackbar();

	const handleError = (e: any) => {
		if (e.message === 'Token has expired') {
			authState.logout();
		}
		setError(e.message);
	};

	const fetchHighlights = async (newFilters?: HighlightsFetchFiltersType) => {
		setLoading(true);
		setError(null);
		try {
			let queryFilters = filters;
			if (newFilters) {
				queryFilters = newFilters;
				setFilters(newFilters);
			}
			const newHighlights = await getHighights(queryFilters || undefined);
			setHighlights(newHighlights);
		} catch (e: any) {
			handleError(e);
		}
		setLoading(false);
	};

	const generateSummary = async (text: string) => {
		if (!text.trim()) return;
		setLoading(true);
		setError(null);
		try {
			await getSummary(text);
			fetchHighlights();
			showSnackbar({ message: 'Highlight summarized!!' });
		} catch (e: any) {
			handleError(e);
		}
		setLoading(false);
	};

	const changeHighlightLabel = async (id: string, newLabel: string) => {
		setLoading(true);
		setError(null);
		try {
			await updateHighlightLabel(id, newLabel);
			fetchHighlights();
			showSnackbar({ message: 'Label changed' });
		} catch (e: any) {
			handleError(e);
		}
		setLoading(false);
	};

	const deleteHighlight = async (id: string) => {
		setLoading(true);
		setError(null);
		try {
			await removeHighlight(id);
			await fetchHighlights();
			showSnackbar({ message: 'Highlight deleted' });
		} catch (e: any) {
			handleError(e);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchHighlights();
	}, [authState.user]);

	const values = useMemo(
		() => ({
			loading,
			error,
			highlights,
			generateSummary,
			changeHighlightLabel,
			disabled,
			show,
			toggleShow,
			toggleDisabled,
			deleteHighlight,
			refetchHighlights: fetchHighlights
		}),
		[loading, error, highlights, disabled, show]
	);

	return <HighlightsContext.Provider value={values}>{children}</HighlightsContext.Provider>;
}
