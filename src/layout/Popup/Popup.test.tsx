import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HighlightsContext } from '../../contexts/HighlightsContext';
import { AuthContext } from '../../contexts/AuthContext';
import Popup from './Popup';
import { authStateMock } from '../../mocks/data/authState';
import { highlightStateMock } from '../../mocks/data/highlightsState';

describe('Popup component', () => {
	const renderPopup = (show = true) => {
		return render(
			<HighlightsContext.Provider value={{ ...highlightStateMock, show }}>
				<AuthContext.Provider value={authStateMock}>
					<Popup>hello world</Popup>
				</AuthContext.Provider>
			</HighlightsContext.Provider>
		);
	};

	test('renders popup', () => {
		renderPopup();

		const summaryTooltipElement = screen.getByTestId('popup');
		expect(summaryTooltipElement).toBeInTheDocument();
	});

	test('renders toggle button', () => {
		renderPopup();

		const summaryTooltipElement = screen.getByTestId('popup');
		expect(summaryTooltipElement).toBeInTheDocument();
	});

	test('renders the inner child', () => {
		renderPopup();
		const popupElement = screen.getByText('hello world');
		expect(popupElement).toBeInTheDocument();
	});

	test('toggle works', () => {
		renderPopup(false);
		const popupElement = screen.queryByText('hello world');
		expect(popupElement).not.toBeInTheDocument();
	});
});
