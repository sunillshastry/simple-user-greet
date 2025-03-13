/**
 * Greet users with custom greeting, name and logging functionality
 * @param {string} greeting Greeting message to be used
 * @param {string} username User's name
 * @param {boolean} log Toggle logging functionality
 * @returns
 */
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
