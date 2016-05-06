import test from 'ava';
import isFqdn from './';

test('it work!', t => {
	const result = isFqdn();
	t.is(result, 42);
});
