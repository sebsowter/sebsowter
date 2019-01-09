/**
 * Convert quotes
 * @method: orderPosts
 * @param: value {String}
 * @return: {String}
 */
export const orderPosts = (a, b) => {
	if (a.order < b.order) {
		return -1;
	} else if (a.order > b.order) {
		return 1;
	} else {
		return 0;
	}
};

/**
 * Convert quotes
 * @method: convertQuotes
 * @param: value {String}
 * @return: {String}
 */
export const convertQuotes = value =>
	value.replace(new RegExp('&#039;', 'g'), '"')
		.replace(new RegExp('&quot;', 'g'), '"');

 /**
 * String to slug
 * @method: toSlug
 * @param: value {String}
 * @return: {String}
 */
export const toSlug = value =>
	value.toLowerCase()
		.replace(new RegExp(' ', 'g'), '_')
		.replace(new RegExp('&#038;', 'g'), 'and')
		.replace(new RegExp('&amp;', 'g'), 'and')
		.replace(new RegExp('&', 'g'), 'and');

