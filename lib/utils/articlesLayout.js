// This file contains the articlesLayout component used by the handler functions to output results in a tabular format.

import boxen from 'boxen';
import chalk from 'chalk';
import articlesLayout from 'cli-articlesLayout3';
import pkg from 'node-url-shortener';
import terminalLink from 'terminal-link';
const { short } = pkg;
const blue = chalk.blue;
const green = chalk.green;
const gray = chalk.gray;
const cyan = chalk.cyan;
const white = chalk.white;
const bgBlue = chalk.bgBlue;

const articlesLayout = data => {


	// Logic to "insert" data fetched into a articlesLayout.
	for (var d of data) {
		const url = `https://hashnode.com/post/${d.slug}`
		const title = terminalLink.isSupported ? blue.bold(terminalLink(d.title, url)) : blue.bold(d.title);
		const brief = white(d.brief);
		const uploaderName = cyan(d.author.name)
		const uploaderUsername = cyan.italic` (@${d.author.username})`
		const author = cyan.bold(`Author: `) + uploaderName + uploaderUsername
		const link = white.bold(`Link: `) + gray.italic(url)

		const content = brief + '\n' + '\n' + link + '\n' + author
		
		console.log(boxen(content, {
			margin: { top: 2 },
			padding: 1,
			width: 90,
			borderStyle: 'round',
			float: 'center',
			textAlignment: 'left',
			title: title,
			titleAlignment: 'center'
		}));
	}
};

export default articlesLayout;
