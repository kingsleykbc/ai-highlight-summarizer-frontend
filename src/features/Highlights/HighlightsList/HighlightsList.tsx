import { useState } from 'react';
import { dummyHighlights } from '../../../utils/mock';
import HighlightsListFilter from '../HighlightsListFilter/HighlightsListFilter';
import HighlightsListItem from '../HighlightsListItem/HighlightsListItem';
import styles from './HighlightsList.module.css';
import { HighlightDataType } from '../../../services/highlights';
import SummaryView from '../SummaryView/SummaryView';

const HighlightsList = () => {
	const [highlightSummary, setHighlightSummary] = useState<HighlightDataType | null>(null);
	const [showFullSummary, setShowFullSummary] = useState(false);
	const toggleFullSummary = () => setShowFullSummary(!showFullSummary);

	const handleHighlightClick = (summary: HighlightDataType) => {
		setHighlightSummary(summary);
		toggleFullSummary();
	};

	return (
		<div className={styles.highlightsList}>
			<HighlightsListFilter />

			<div className={styles.results}>
				{dummyHighlights.map(data => (
					<HighlightsListItem key={data._id} data={data} onClick={() => handleHighlightClick(data)} />
				))}
			</div>

			<SummaryView show={showFullSummary} toggle={toggleFullSummary} data={highlightSummary} />
		</div>
	);
};

export default HighlightsList;
