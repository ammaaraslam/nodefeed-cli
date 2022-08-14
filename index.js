#!/usr/bin/env node

import init from './lib/init.js';
import cli from './lib/cli.js';
import getCommunityArticles from './lib/utils/handlers/getCommunityArticles.js';
import getLatestArticles from './lib/utils/handlers/getLatestArticles.js';
import getTrendingArticles from './lib/utils/handlers/getTrendingArticles.js';
import getArticlesByUser from './lib/utils/handlers/getArticlesByUser.js';
import getFeaturedArticles from './lib/utils/handlers/getFeaturedArticles.js';

const input = cli.input;
const flags = cli.flags;
const { latest, featured, user, trending, community, debug } = flags;

(async () => {
	input.includes(`help`) && cli.showHelp(0);
	{
		community && input.includes(`articles`) && getCommunityArticles();
	}

	{
		latest && input.includes(`articles`) && getLatestArticles();
	}
	{
		featured && input.includes(`articles`) && getFeaturedArticles();
	}
	{
		user && input.includes(`articles`) && getArticlesByUser();
	}
	{
		trending && input.includes(`articles`) && getTrendingArticles();
	}
	{
		debug && console.log(cli.flags);
	}
})();
