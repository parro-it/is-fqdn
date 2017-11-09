import test from 'ava';
import isFQDN from './';

function check({t, valids = [], invalids = [], args}) {
	valids.forEach(domain => {
		if (!isFQDN(domain, args)) {
			t.fail(`${domain} FQDN should be valid`);
		}
	});

	invalids.forEach(domain => {
		if (isFQDN(domain, args)) {
			t.fail(`${domain} FQDN should not be valid`);
		}
	});
}

test('without trailing dots', t => {
	check({
		t,
		valids: [
			'domain.com',
			'dom.plato',
			'a.domain.co',
			'foo--bar.com',
			'xn--froschgrn-x9a.com',
			'rebecca.blackfriday'
		],
		invalids: [
			'abc',
			'256.0.0.0',
			'_.com',
			'*.some.com',
			's!ome.com',
			'domain.com/',
			'/more.com'
		]
	});
});

test('with trailing dots', t => {
	check({
		t,
		args: {allowTrailingDot: true},
		valids: [
			'example.com.'
		]
	});
});

