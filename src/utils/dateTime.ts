import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export function timeAgo(date: Date) {
	return dayjs(date).fromNow();
}

export function fullDate(date: Date) {
	return dayjs(date).format('Do MMM YYYY');
}
