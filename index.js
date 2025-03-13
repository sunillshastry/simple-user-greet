function greet(greeting = `Hello there`, username = 'user', log = false) {
	const output = `${greeting}, ${username}!`;
	if (log) {
		console.log(output);
		return output;
	} else {
		return output;
	}
}

module.exports = { greet };
