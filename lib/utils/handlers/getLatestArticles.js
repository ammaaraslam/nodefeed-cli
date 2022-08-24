// Function for fetching latest articles from Hashnode.

import fetch from 'node-fetch';
import { LatestArticlesQuery } from '../queries.js';
import articlesLayout from '../articlesLayout.js';
import { spinner } from '../spinner.js';

async function getLatestArticles() {
	const variables = { page: 0 };
	const query = LatestArticlesQuery;

	spinner.start(`Fetching trending articles`);
	
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
	console.log('\n', `Filtered latest articles `);
	console.log(articlesLayout(result.data.storiesFeed));
}
export default getLatestArticles;
