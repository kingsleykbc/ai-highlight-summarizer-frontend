import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import styles from './SummaryTooltip.module.css';
import { useHighlights } from '../../../contexts/HighlightsContext';
import Button from '../../../components/Button/Button';
import Text from '../../../components/Text/Text';

const SummaryTooltip: React.FC = () => {
	const [selectedText, setSelectedText] = useState('');
	const { disabled, generateSummary, loading } = useHighlights();
	const tooltipRef = useRef<HTMLDivElement>(null);

	const handleMouseUp = (e: MouseEvent) => {
		if (disabled || (tooltipRef.current && tooltipRef.current.contains(e.target as Node))) return;
		const text = window.getSelection()?.toString().trim() || '';
		if (text) {
			setSelectedText(text);
		} else {
			setSelectedText('');
		}
	};

	useEffect(() => {
		setSelectedText('');
		document.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [disabled]);

	if (!selectedText) {
		return null;
	}

	const handleGenerateSummary = async () => {
		await generateSummary(selectedText);
		setSelectedText('');
	};

	return (
		<div ref={tooltipRef} className={styles.summaryTooltip}>
			<Text size='sm' className={styles.selectedText}>
				<Text size='sm' color='gray'>
					Selected:{' '}
				</Text>
				{selectedText}
			</Text>
			<Button loading={loading} label='Summarize' onClick={handleGenerateSummary} />
		</div>
	);
};

export default SummaryTooltip;
