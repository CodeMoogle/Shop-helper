export function formatDate(date) {
	if (typeof date !== 'string') {
		throw new Error(`formatDate takes a string as an argument`)
	}
	return date
		.split('-')
		.reverse()
		.join('.')
}
