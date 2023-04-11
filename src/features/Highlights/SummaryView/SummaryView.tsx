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

export interface SummaryViewProps {
	show: boolean;
	toggle: () => void;
	data: HighlightDataType | null;
}

const SummaryView = ({ data, show, toggle }: SummaryViewProps) => {
	if (!data) return null;
	const { tags, summary, createdAt, text } = data;

	const handleDelete = () => {
		// TODO: Handle delete
	};

	return (
		<Modal title={<Title title={data?.label} />} show={show} toggle={toggle} height='800px' width='1200px'>
			<div className={styles.content}>
				<Views summary={summary} text={text} />
				<div className={styles.bottomSection}>
					<div className={styles.tagsAndDates}>
						<Text size='sm' className={styles.tags}>
							{displayTags(tags)}
						</Text>
						<Dot className={styles.dot} />
						<Text>{fullDate(createdAt)}</Text>
					</div>
					<Button onClick={() => handleDelete()} label='Delete' />
				</div>
			</div>
		</Modal>
	);
};

export default SummaryView;

const Title = ({ title }: { title?: string }) => {
	const [edit, setEdit] = useState(false);
	const [newTitle, setNewTitle] = useState(title || '');
	if (!title) return null;

	const handleChange = () => {
		// TODO: Handle change
		setEdit(false);
	};

	return (
		<div className={styles.title}>
			{edit ? (
				<>
					<input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
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
			<section className={[styles.section, styles.original].join(' ')}>
				<Text size='sm' className={styles.label}>
					Original
				</Text>
				<Text size='sm' color='gray' className={styles.content}>
					{text}
					Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive
					taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am
					making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there
					thinking ‘I want that, let me tell you 8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never
					thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There
					were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best
					feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you 8 Steal the formula, upgrade your life
					Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study
					writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing
					about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me
					tell you 8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing
					online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey.
					Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre
					sitting there thinking ‘I want that, let me tell you 8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash
					I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors,
					nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the
					internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you 8 Steal the formula,
					upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero
					courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making
					$1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there
					thinking ‘I want that, let me tell you 8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never
					thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There
					were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best
					feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you8 Steal the formula, upgrade your life Photo
					by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at
					school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about
					whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell
					you 8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing
					online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey.
					Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre
					sitting there thinking ‘I want that, let me tell you 8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash
					I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors,
					nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the
					internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you 8 Steal the formula,
					upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero
					courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making
					$1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there
					thinking ‘I want that, let me tell you
				</Text>
			</section>
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
		</div>
	);
};
