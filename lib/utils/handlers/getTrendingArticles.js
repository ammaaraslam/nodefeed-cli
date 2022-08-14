import fetch from 'node-fetch';
import { TrendingArticlesQuery } from '../queries.js';
import table from '../table.js';

async function getTrendingArticles() {
	const variables = { page: 0 };
	const query = TrendingArticlesQuery;

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
	console.log(table(result.data.storiesFeed));
}
export default getTrendingArticles;
