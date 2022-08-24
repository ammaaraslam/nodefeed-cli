// Function for fetching community/personalized feed articles from Hashnode.

import fetch from 'node-fetch';
import { CommunityArticlesQuery } from '../queries.js';
import articlesLayout from '../articlesLayout.js';
import { spinner } from '../spinner.js';
import chalk from 'chalk'

async function getCommunityArticles() {
	const variables = { page: 0 };
	const query = CommunityArticlesQuery;

	spinner.start(chalk.yellowBright(`Fetching articles from Hashnode`));

	// Fetching and storing data.
	const data = await fetch('https://api.hashnode.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});
	const result = await data.json();
	spinner.stop();
	
	// Outputting fetched articles in a tabular format.
	console.log(chalk.yellow('\n', `Here are some articles from Hashnode`));
	return articlesLayout(result.data.storiesFeed);
}
export default getCommunityArticles;
