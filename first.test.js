const scope = require('./first.js');

describe('The output ', () => {
	it ('Should not return any value', () => {
		let result = scope();
		expect(result).toBeUndefined();
	});
});