import fetch from 'node-fetch';
import { CommunityArticlesQuery } from '../queries.js';
import table from '../table.js';
import { spinner } from '../spinner.js';

async function getCommunityArticles() {
	const variables = { page: 0 };
	const query = CommunityArticlesQuery;

	spinner.start(`Fetching trending articles`);

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
	console.log('\n', `Here are some articles `);
	console.log(table(result.data.storiesFeed));
}
export default getCommunityArticles;
