import { useState, useEffect } from 'react';
import TagInput from '../../../components/TagInput/TagInput';
import styles from './HighlightsListFilter.module.css';
import Text from '../../../components/Text/Text';
import { FaSortAmountDown as SortIcon } from 'react-icons/fa';
import { SortByType } from '../../../services/highlights';
import { useHighlights } from '../../../contexts/HighlightsContext';

const HighlightsListFilter = () => {
	const [tags, setTags] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<SortByType>('newest');
	const { refetchHighlights } = useHighlights();

	useEffect(() => {
		refetchHighlights({ tags, sortBy });
	}, [tags, sortBy]);

	return (
		<div className={styles.highlightsFilter}>
			<TagInput value={tags} onChange={setTags} />

			<div className={styles.bottomSection}>
				<Text size='sm' color='gray'>
					Press enter to add tag
				</Text>
				<div className={styles.sortSection}>
					<SortIcon fill='white' className={styles.sortIcon} />
					<select value={sortBy} onChange={e => setSortBy(e.target.value as SortByType)}>
						<option>newest</option>
						<option>oldest</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default HighlightsListFilter;
