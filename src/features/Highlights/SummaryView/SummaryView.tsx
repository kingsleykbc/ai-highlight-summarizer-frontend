import { useState } from 'react';
import Text from '../../../components/Text/Text';
import { MdEditSquare as EditIcon } from 'react-icons/md';
import { BsCheckCircleFill as SaveIcon } from 'react-icons/bs';
import Modal from '../../../components/Modal/Modal';
import styles from './SummaryView.module.css';
import { HighlightDataType } from '../../../services/highlights';
import { displayTags } from '../../../utils/formatting';
import { RxDotFilled as Dot } from 'react-icons/rx';
import { fullDate } from '../../../utils/dateTime';
import Button from '../../../components/Button/Button';
import { useHighlights } from '../../../contexts/HighlightsContext';

export interface SummaryViewProps {
	show: boolean;
	toggle: () => void;
	data: HighlightDataType | null;
}

interface TitleProps {
	title?: string;
	changeHighlightLabel: (newLabel: string) => void;
}

const SummaryView = ({ data, show, toggle }: SummaryViewProps) => {
	const { deleteHighlight, changeHighlightLabel, loading } = useHighlights();

	if (!data) return null;
	const { _id, tags, summary, createdAt, text } = data;

	const handleDelete = async () => {
		await deleteHighlight(_id);
		toggle();
	};

	return (
		<Modal
			title={<Title changeHighlightLabel={changeHighlightLabel} title={data?.label} />}
			show={show}
			toggle={toggle}
			height='800px'
			width='1200px'
		>
			<div className={styles.content}>
				<Views summary={summary} text={text} />
				<div className={styles.bottomSection}>
					<div className={styles.tagsAndDates}>
						<Text size='sm' className={styles.tags}>
							{displayTags(tags)}
						</Text>
						<Dot className={styles.dot} />
						<Text size='sm'>{fullDate(createdAt)}</Text>
					</div>
					<Button loading={loading} onClick={() => handleDelete()} label='Delete' />
				</div>
			</div>
		</Modal>
	);
};

export default SummaryView;

const Title = ({ title, changeHighlightLabel }: TitleProps) => {
	const [edit, setEdit] = useState(false);
	const [newTitle, setNewTitle] = useState(title || '');
	if (!title) return null;

	const handleChange = () => {
		changeHighlightLabel(newTitle);
		setEdit(false);
	};

	return (
		<div className={styles.title}>
			{edit ? (
				<>
					<input className={styles.titleInput} value={newTitle} onChange={e => setNewTitle(e.target.value)} />
					<SaveIcon className={styles.saveIcon} role='button' onClick={() => handleChange()} />
				</>
			) : (
				<>
					<Text tag='h3' weight='semibold'>
						{newTitle}
					</Text>
					<EditIcon className={styles.icon} role='button' onClick={() => setEdit(true)} />
				</>
			)}
		</div>
	);
};

const Views = ({ text, summary }: { text?: string; summary: string }) => {
	return (
		<div className={styles.summary}>
			<section className={styles.section}>
				<div className='md:text-right w-full'>
					<Text size='sm' className={styles.label}>
						Summary
					</Text>
				</div>
				<Text size='sm' className={styles.content}>
					{summary}
				</Text>
			</section>
			<section className={[styles.section, styles.original].join(' ')}>
				<Text size='sm' className={styles.label}>
					Original
				</Text>
				<Text size='sm' color='gray' className={styles.content}>
					{text}
				</Text>
			</section>
		</div>
	);
};
