'use strict';

/* eslint-disable camelcase */

function isFDQN(_str, {
	requireTld = true,
	allowUnderscores = false,
	allowTrailingDot = false
} = {}) {
	let str;

	/* Remove the optional trailing dot before checking validity */
	if (allowTrailingDot && _str[_str.length - 1] === '.') {
		str = _str.substring(0, _str.length - 1);
	} else {
		str = _str;
	}

	const parts = str.split('.');

	if (requireTld) {
		const tld = parts.pop();
		if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
			return false;
		}
	}

	for (let part, i = 0; i < parts.length; i++) {
		part = parts[i];
		if (allowUnderscores) {
			if (part.indexOf('__') >= 0) {
				return false;
			}
			part = part.replace(/_/g, '');
		}
		if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
			return false;
		}
		if (/[\uff01-\uff5e]/.test(part)) {
			// disallow full-width chars
			return false;
		}
		if (part[0] === '-' || part[part.length - 1] === '-') {
			return false;
		}
	}
	return true;
}

module.exports = isFDQN;
