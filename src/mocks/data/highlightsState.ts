import { HighlightsContextType } from '../../contexts/HighlightsContext';

export const highlightStateMock: HighlightsContextType = {
	highlights: null,
	generateSummary: () => null,
	refetchHighlights: () => null,
	deleteHighlight: () => null,
	changeHighlightLabel: () => null,
	toggleDisabled: () => null,
	toggleShow: () => null,
	show: true,
	disabled: false,
	loading: false,
	error: null
};
