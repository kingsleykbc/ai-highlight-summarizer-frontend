import { HighlightDataType } from '../services/highlights';

export function delay<T>(func: Function, ms = 1000): Promise<T> {
	return new Promise(resolve => setTimeout(() => resolve(func() as T), ms));
}

export const dummyHighlights: HighlightDataType[] = [
	{
		_id: '0',
		label: 'Summary-1002',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '1',
		label: 'Summary-1003',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',

		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '2',
		label: 'Summary-343',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',

		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '4',
		label: 'Summary-4545',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '5',
		label: 'Summary-3455',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '6',
		label: 'Summary-3453',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '7',
		label: 'Summary-43445',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	},
	{
		_id: '8',
		label: 'Summary-34453',
		tags: ['word', 'news', 'item', 'cool'],
		text: '8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		summary:
			'8 Steal the formula, upgrade your life Photo by Radek Grzybowski on Unsplash I never thought Id make a dime from writing online. Ive taken zero courses, didnt study writing at school, had no mentors, nothing. There were no shortcuts in my journey. Yet, here I am making $1.5k a month, writing about whatever I want on the internet. Its the best feeling in the world. So if youre sitting there thinking ‘I want that, let me tell you',
		createdAt: new Date()
	}
];
