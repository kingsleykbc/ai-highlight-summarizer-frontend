/* eslint-disable testing-library/no-unnecessary-act */
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryTooltip from './SummaryTooltip';
import { useAuth } from '../../../contexts/AuthContext';
import { useHighlights } from '../../../contexts/HighlightsContext';

jest.mock('../../../contexts/AuthContext');
jest.mock('../../../contexts/HighlightsContext');

describe('SummaryTooltip component', () => {
	beforeEach(() => {
		(useAuth as jest.Mock).mockReturnValue({
			user: { id: '1', name: 'John Doe', email: 'john@example.com' }
		});

		(useHighlights as jest.Mock).mockReturnValue({
			disabled: false,
			generateSummary: jest.fn(),
			loading: false
		});

		// Mock window.getSelection to return a non-empty string
		window.getSelection = jest.fn().mockReturnValue({
			toString: () => 'Sample text'
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders SummaryTooltip when text is selected', () => {
		const { queryByTestId } = render(<SummaryTooltip />);
		act(() => {
			fireEvent.mouseUp(document.body);
		});
		// eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/prefer-presence-queries
		expect(queryByTestId('summary-tooltip')).toBeInTheDocument();
	});

	test('does not render SummaryTooltip when no text is selected', () => {
		// Mock window.getSelection to return an empty string
		window.getSelection = jest.fn().mockReturnValue({
			toString: () => ''
		});

		const { queryByTestId } = render(<SummaryTooltip />);
		act(() => {
			fireEvent.mouseUp(document.body);
		});
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(queryByTestId('summary-tooltip')).not.toBeInTheDocument();
	});

	test('calls generateSummary when Summarize button is clicked', () => {
		const generateSummaryMock = jest.fn();
		(useHighlights as jest.Mock).mockReturnValue({
			disabled: false,
			generateSummary: generateSummaryMock,
			loading: false
		});

		render(<SummaryTooltip />);
		act(() => {
			fireEvent.mouseUp(document.body);
		});
		act(() => {
			fireEvent.click(screen.getByText('Summarize'));
		});

		expect(generateSummaryMock).toHaveBeenCalled();
	});
});
