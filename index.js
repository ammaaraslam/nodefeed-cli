#!/usr/bin/env node

import init from './lib/init.js';
import cli from './lib/cli.js';
import getArticles from './lib/utils/getArticles.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const articles = await getArticles();
(async () => {
	input.includes(`help`) && cli.showHelp(0);

	input.includes(`articles`) && console.log(articles);
})();
