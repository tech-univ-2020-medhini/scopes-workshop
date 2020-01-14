const foo = require('./first.js');

describe('The output ', () => {
	it ('Should not return any value', () => {
		let result = foo();
		expect(result).toBeUndefined();
	});
});