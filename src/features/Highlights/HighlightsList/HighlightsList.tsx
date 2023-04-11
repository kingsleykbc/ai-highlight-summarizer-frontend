import { dummyHighlights } from '../../../utils/mock';
import HighlightsListFilter from '../HighlightsListFilter/HighlightsListFilter';
import HighlightsListItem from '../HighlightsListItem/HighlightsListItem';
import styles from './HighlightsList.module.css';

const HighlightsList = () => {
	return (
		<div className={styles.highlightsList}>
			<HighlightsListFilter />

			<div className={styles.results}>
				{dummyHighlights.map(data => (
					<HighlightsListItem key={data._id} data={data} />
				))}
			</div>
		</div>
	);
};

export default HighlightsList;
