import { HighlightDataType } from '../../../services/highlights';
import Text from '../../../components/Text/Text';
import { timeAgo } from '../../../utils/dateTime';
import styles from './HighlightsListItem.module.css';
import { displayTags } from '../../../utils/formatting';

export interface HighlightsListItemProps {
	data: HighlightDataType;
	onClick: () => void;
}

const HighlightsListItem = ({ data: { summary, createdAt, label, tags }, onClick }: HighlightsListItemProps) => {
	return (
		<div role='button' className={styles.highlightListItem} onClick={() => onClick()}>
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
					{displayTags(tags)}
				</Text>
			</div>
		</div>
	);
};

export default HighlightsListItem;
