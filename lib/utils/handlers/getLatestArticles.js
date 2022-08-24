// Function for fetching latest articles from Hashnode.

import fetch from 'node-fetch';
import { LatestArticlesQuery } from '../queries.js';
import articlesLayout from '../articlesLayout.js';
import { spinner } from '../spinner.js';
import chalk from 'chalk'

async function getLatestArticles() {
	const variables = { page: 0 };
	const query = LatestArticlesQuery;

	spinner.start(chalk.yellowBright(`Fetching latest articles from Hashnode`));
	
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
	console.log(chalk.yellow('\n', `Here are some latest articles from Hashnode.`));
	console.log(articlesLayout(result.data.storiesFeed));
}
export default getLatestArticles;
