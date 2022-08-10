import cliMeowHelp from 'cli-meow-help';
import meow from 'meow';
import { flags } from './utils/flags.js';

const commands = {
	help: { desc: `Print help info` }
};

const helpText = cliMeowHelp({
	name: `hashsole`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: true,
	flags
};

const cli = meow(helpText, options);

export default cli;
