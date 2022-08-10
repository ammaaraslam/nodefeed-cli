#!/usr/bin/env node

import init from './lib/init.js';
import cli from './lib/cli.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
})();
