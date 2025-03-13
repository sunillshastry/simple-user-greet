# simple-user-greet

Get custom greetings to users, with logging functionality

## Installation

```sh
npm install simple-user-greet
```

## Template

```typescript
function greet(
	greeting: string = '',
	username: string = '',
	log: boolean = false
) {}
```

## Usage

```javascript
// Require module for usage
const { greet } = require('simple-user-greet');
```

For JavaScript modules

```javascript
import { greet } from 'simple-user-greet';
```

Standalone function call

```javascript
greet();
// Returns 'Hello there, user!'
```

Function call with custom greeting

```javascript
greet('Good morning');
// Returns 'Good morning, user!'
```

Function call with greeting and name

```javascript
greet('Good day', 'Tim');
// Returns 'Good day, Tim!'
```

Logging functionality

```javascript
greet('Hello', 'Jay', true);
// Returns + console.logs 'Hello, Jay!'
```
