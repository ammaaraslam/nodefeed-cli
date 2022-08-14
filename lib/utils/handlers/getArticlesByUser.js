import fetch from 'node-fetch';
import { ArticlesByUserQuery } from '../queries.js';
import table from '../table.js';
import chalk from 'chalk';

async function getArticlesByUser() {
	const variables = { page: 0, username: username };
	const query = ArticlesByUserQuery;

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
	console.log(chalk.cyan(table(result.data.storiesFeed).toString()));
}
export default getArticlesByUser;
