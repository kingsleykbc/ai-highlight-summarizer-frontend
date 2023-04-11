import { ReactNode } from 'react';
import styles from './Text.module.css';

export interface TextProps {
	children: ReactNode;
	tag?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
	size?: 'default-size' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	weight?: 'default-weight' | 'bold' | 'semibold' | 'normal';
	color?: 'white' | 'gray';
	className?: string;
}

const Text = ({
	children,
	tag = 'span',
	size = 'default-size',
	color = 'white',
	weight = 'default-weight',
	className: cName = ''
}: TextProps) => {
	const Tag = tag;
	const className = [styles.text, styles[tag], styles[size], styles[color], styles[weight], cName].join(' ');
	return <Tag className={className}>{children}</Tag>;
};

export default Text;
