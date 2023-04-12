import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import styles from './SummaryTooltip.module.css';
import { useHighlights } from '../../../contexts/HighlightsContext';
import Button from '../../../components/Button/Button';
import Text from '../../../components/Text/Text';

const SummaryTooltip: React.FC = () => {
	const [selectedText, setSelectedText] = useState('');
	const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
	const { disabled, generateSummary, loading } = useHighlights();
	const tooltipRef = useRef<HTMLDivElement>(null);

	const handleMouseUp = (e: MouseEvent) => {
		if (disabled || (tooltipRef.current && tooltipRef.current.contains(e.target as Node))) return;
		const text = window.getSelection()?.toString().trim() || '';

		if (text) {
			setSelectedText(text);
			setPosition({ x: e.pageX, y: e.pageY });
		} else {
			setSelectedText('');
			setPosition(null);
		}
	};

	useLayoutEffect(() => {
		if (selectedText && position && tooltipRef.current) {
			const tooltipWidth = tooltipRef.current.clientWidth;
			const tooltipHeight = tooltipRef.current.clientHeight;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			let x = position.x;
			let y = position.y;

			let updatePosition = false;

			if (x + tooltipWidth > windowWidth) {
				x = windowWidth - tooltipWidth;
				updatePosition = true;
			}

			if (y + tooltipHeight > windowHeight) {
				y = windowHeight - tooltipHeight;
				updatePosition = true;
			}

			if (updatePosition) {
				setPosition({ x, y });
			}
		}
	}, [selectedText, position]);

	useEffect(() => {
		setSelectedText('');
		document.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [disabled]);

	if (!selectedText || !position) {
		return null;
	}

	const handleGenerateSummary = async () => {
		await generateSummary(selectedText);
		setSelectedText('');
	};

	return (
		<div
			ref={tooltipRef}
			className={styles.summaryTooltip}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`
			}}
		>
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
