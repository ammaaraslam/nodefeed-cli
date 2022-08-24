// Function for fetching articles from a specific Hashnode user.

import chalk from 'chalk';
import fetch from 'node-fetch';
import { ArticlesByUserQuery } from '../queries.js';
import articlesLayout from '../articlesLayout.js';

async function getArticlesByUser(user) {
	const variables = { page: 0, username: user };
	const query = ArticlesByUserQuery;

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

	// Outputting fetched articles in a tabular format.
	console.log('\n', `Filtered articles by user: ` + chalk.green(user));
	console.log(articlesLayout(result.data.user.publication.posts));
}
export default getArticlesByUser;
