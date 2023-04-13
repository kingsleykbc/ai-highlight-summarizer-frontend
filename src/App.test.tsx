import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
	test('renders popup', () => {
		render(<App />);
		const summaryTooltipElement = screen.getByTestId('popup');
		expect(summaryTooltipElement).toBeInTheDocument();
	});

	test('renders toggle button', () => {
		render(<App />);
		const summaryTooltipElement = screen.getByTestId('popup');
		expect(summaryTooltipElement).toBeInTheDocument();
	});
});
