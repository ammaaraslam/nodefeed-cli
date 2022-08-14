import fetch from 'node-fetch';
import { FeaturedArticlesQuery } from '../queries.js';
import table from '../table.js';

async function getFeaturedArticles() {
	const variables = { page: 0 };
	const query = FeaturedArticlesQuery;

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
	{
		result && console.log('\n', `Filtered featured articles `),
			console.log(table(result.data.storiesFeed));
	}
}
export default getFeaturedArticles;
