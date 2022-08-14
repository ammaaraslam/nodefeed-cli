import fetch from 'node-fetch';
import { CommunityArticlesQuery } from '../queries.js';
import table from '../table.js';

async function getCommunityArticles() {
	const variables = { page: 0 };
	const query = CommunityArticlesQuery;

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
		result && console.log('\n', `Here are some articles `),
			console.log(table(result.data.storiesFeed));
	}
}
export default getCommunityArticles;
