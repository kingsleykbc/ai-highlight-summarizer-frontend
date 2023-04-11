import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export function timeAgo(date: Date) {
	return dayjs(date).fromNow();
}
