// Function for fetching featured articles from Hashnode.

import fetch from 'node-fetch';
import { FeaturedArticlesQuery } from '../queries.js';
import table from '../table.js';
import { spinner } from '../spinner.js';

async function getFeaturedArticles() {
	const variables = { page: 0 };
	const query = FeaturedArticlesQuery;

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
	console.log('\n', `Filtered featured articles `);
	console.log(table(result.data.storiesFeed));
}
export default getFeaturedArticles;
