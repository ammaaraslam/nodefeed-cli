#!/usr/bin/env node

import init from './lib/init.js';
import cli from './lib/cli.js';
import getCommunityArticles from './lib/utils/handlers/getCommunityArticles.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const communityArticles = await getCommunityArticles();

(async () => {
	input.includes(`help`) && cli.showHelp(0);

	input.includes(`articles`) && console.log(communityArticles);
})();
