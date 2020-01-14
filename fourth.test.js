const foo = require('./fourth.js');

describe('The function foo', () => {
	it ('Should be a function', () => {
		let result = foo();
		expect(typeof result).toBe('function');
	});
});