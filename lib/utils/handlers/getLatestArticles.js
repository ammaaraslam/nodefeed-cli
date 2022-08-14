import fetch from 'node-fetch';
import { LatestArticlesQuery } from '../queries.js';
import table from '../table.js';

async function getLatestArticles() {
	const variables = { page: 0 };
	const query = LatestArticlesQuery;

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
		result && console.log('\n', `Filtered latest articles `),
			console.log(table(result.data.storiesFeed));
	}
}
export default getLatestArticles;
