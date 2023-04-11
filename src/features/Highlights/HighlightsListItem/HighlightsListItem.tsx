import { HighlightDataType } from '../../../services/highlights';
import Text from '../../../components/Text/Text';
import { timeAgo } from '../../../utils/dateTime';
import styles from './HighlightsListItem.module.css';

export interface HighlightsListItemProps {
	data: HighlightDataType;
}

const HighlightsListItem = ({ data: { summary, createdAt, label, tags } }: HighlightsListItemProps) => {
	return (
		<div className={styles.highlightListItem}>
			<Text tag='h4' size='sm' weight='semibold'>
				{label}
			</Text>
			<Text className={styles.summary} tag='p' size='sm' color='gray'>
				{summary}
			</Text>
			<div className={styles.bottomSection}>
				<Text color='gray' size='sm'>
					{timeAgo(createdAt)}
				</Text>
				<Text className={styles.tags} size='sm'>
					{tags.map(tag => `#${tag}`).join(', ')}
				</Text>
			</div>
		</div>
	);
};

export default HighlightsListItem;
