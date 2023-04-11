export function displayTags(tags: string[]) {
	return tags.map(tag => `#${tag}`).join(', ');
}
