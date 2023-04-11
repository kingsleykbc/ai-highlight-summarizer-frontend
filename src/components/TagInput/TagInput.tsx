import { TagsInput } from 'react-tag-input-component';
import styles from './TagInput.module.css';
import './ReactTagInputOverride.css';

export interface TagInputProps {
	value?: string[];
	onChange: (value: string[]) => void;
}

const TagInput = ({ value, onChange }: TagInputProps) => {
	return <TagsInput classNames={{ input: styles.tagsInput }} value={value} onChange={onChange} placeHolder='Tags' />;
};

export default TagInput;
