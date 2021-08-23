const chalk = require('chalk')
const log = console.log;
log(chalk.blue.bgYellow.strikethrough('hi there!'))

log('hello there');

log(chalk.blue('Hello ') + chalk.bgBlueBright('there') + chalk.red('!'));

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('50%')}
`);

// // ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

// Easily define your own themes:

const error = chalk.bold.red.underline;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);