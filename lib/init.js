import chalk from 'chalk';
import isFirstRun from 'first-run';
import fs from 'fs';
import cli from './cli.js';
import boxen from 'boxen';

// Getting data from package.json file
const meta = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// Main function for initializing the CLI (this is the first function that runs if no commands/flags are specified)
const init = () => {
	// Constant variables to store different information about the CLI for simplicity of use throughout this function. (Later these will be global)
	const newline = '\n';
	const name = chalk.white.bold.bgBlueBright(` ${meta.name} `);
	const description = chalk.blueBright(meta.description);
	const version = chalk.yellow(`(Version: ${meta.version})`);
	const author = chalk.cyan.italic(
		`An open-source project by - ${meta.author.name}`
	);

	// Logic to check if user is running this CLI for the first time. If it is, then we display WELCOME message and if not, we display a WELCOME BACK message.
	if (isFirstRun({ name: meta.name }) === true) {
		// This part is executed if it is the first time running the CLI. It includes a new user welcome display, and a usage guide.
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

		// A beautiful display of welcoming new users thanks to the 'boxen' package.
		console.log(chalk.gray(
			boxen(welcomeBox, {
				margin: { top: 2 },
				width: 80,
				padding: 1,
				borderStyle: 'round',
				float: 'center',
				textAlignment: 'center',
				title: 'WELCOME TO',
				titleAlignment: 'center'
			}))
		);
		console.log(newline);
		console.log(
			chalk.blueBright("Here's how you can use the hashnode-console CLI:")
		);
		cli.showHelp();
	} else {
		// This part is executed if it is not the first time running the CLI. It includes a welcome back display and a guide to the usage.
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
