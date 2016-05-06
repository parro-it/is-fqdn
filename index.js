'use strict';

function removeOptionalTrailingDot(str, allowTrailingDot) {
	if (allowTrailingDot && str[str.length - 1] === '.') {
		return str.substring(0, str.length - 1);
	}

	return str;
}

function isFDQN(_str, {
	requireTld = true,
	allowUnderscores = false,
	allowTrailingDot = false
} = {}) {
	const str = removeOptionalTrailingDot(_str, allowTrailingDot);
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
