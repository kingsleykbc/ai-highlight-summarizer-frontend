import { useState, useEffect } from 'react';
import HighlightsListFilter from '../HighlightsListFilter/HighlightsListFilter';
import HighlightsListItem from '../HighlightsListItem/HighlightsListItem';
import styles from './HighlightsList.module.css';
import { HighlightDataType } from '../../../services/highlights';
import SummaryView from '../SummaryView/SummaryView';
import { useHighlights } from '../../../contexts/HighlightsContext';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/Error/Error';

const HighlightsList = () => {
	const [highlightSummary, setHighlightSummary] = useState<HighlightDataType | null>(null);
	const [showFullSummary, setShowFullSummary] = useState(false);
	const toggleFullSummary = () => setShowFullSummary(!showFullSummary);
	const { loading, error, highlights } = useHighlights();

	const handleHighlightClick = (summary: HighlightDataType) => {
		setHighlightSummary(summary);
		toggleFullSummary();
	};

	useEffect(() => {
		if (highlights && highlights.length > 0 && highlightSummary) {
			const updatedHighlightSummary = highlights.find(highlight => highlight._id === highlightSummary._id);
			setHighlightSummary(updatedHighlightSummary || null);
		}
	}, [highlights]);

	return (
		<div className={styles.highlightsList}>
			<HighlightsListFilter />
			<div className={styles.results}>
				{loading ? (
					<Loader message='Fetching Highlights' />
				) : error ? (
					<Error message={error} />
				) : highlights?.length === 0 ? (
					<div className={styles.empty}>
						No highlight Summaries yet. <span>Highlight any text on the page to start</span>
					</div>
				) : (
					highlights?.map(data => <HighlightsListItem key={data._id} data={data} onClick={() => handleHighlightClick(data)} />)
				)}
			</div>

			<SummaryView show={showFullSummary} toggle={toggleFullSummary} data={highlightSummary} />
		</div>
	);
};

export default HighlightsList;
