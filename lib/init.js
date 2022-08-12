import chalk from 'chalk';
import isFirstRun from 'first-run';
import fs from 'fs';
import cli from './cli.js';
import boxen from 'boxen';

let meta = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const init = () => {
	const newline = '\n';
	const name = chalk.bold.bgBlueBright(` ${meta.name} `);
	const description = chalk.blueBright(meta.description);
	const version = chalk.yellow(`(Version: ${meta.version})`);
	const author = chalk.grey.italic(
		`An open-source project by - ${meta.author.name}`
	);

	if (isFirstRun({ name: meta.name }) === true) {
		const welcomeBox =
			newline +
			name +
			newline +
			description +
			newline +
			newline +
			version +
			newline +
			newline +
			newline +
			author +
			newline;

		console.log(
			boxen(welcomeBox, {
				margin: { top: 2 },
				width: 80,
				borderStyle: 'round',
				float: 'center',
				textAlignment: 'center',
				title: 'WELCOME TO',
				titleAlignment: 'center'
			})
		);
		console.log(newline);
		console.log(
			chalk.blueBright("Here's how you can use the hashnode-console CLI:")
		);
		cli.showHelp();
	} else {
		console.log(newline);
		console.log(chalk.green(`Welcome back to ${name}`));
		console.log(newline);
		console.log(
			chalk.blueBright("Here's a quick recap of how to use this CLI:")
		);
		cli.showHelp();
	}
};

export default init;
