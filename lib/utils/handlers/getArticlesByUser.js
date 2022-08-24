// Function for fetching articles from a specific Hashnode user.

import chalk from 'chalk';
import fetch from 'node-fetch';
import { ArticlesByUserQuery } from '../queries.js';
import articlesLayout from '../articlesLayout.js';
import {spinner} from '../spinner.js'

async function getArticlesByUser(user) {
	const variables = { page: 0, username: user };
	const query = ArticlesByUserQuery;

	spinner.start(chalk.yellowBright(`Fetching articles by ${user} from Hashnode`));

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
	console.log(chalk.yellow('\n', `Here are some articles by `) + chalk.green(user));
	return articlesLayout(result.data.user.publication.posts);
}
export default getArticlesByUser;
