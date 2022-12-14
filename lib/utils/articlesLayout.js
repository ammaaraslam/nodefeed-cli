// This file contains the articlesLayout component used by the handler functions to output results in a box format.

import boxen from 'boxen';
import chalk from 'chalk';
import terminalLink from 'terminal-link';

const blue = chalk.blue;
const green = chalk.green;
const gray = chalk.gray;
const cyan = chalk.cyan;
const white = chalk.white;

const articlesLayout = data => {

	// Logic to display data fetched into a articlesLayout (box format).
	for (var d of data) {
		const url = `https://hashnode.com/post/${d.slug}`
		const title = terminalLink.isSupported ? blue.bold(terminalLink(d.title, url)) : blue.bold(d.title);
		const brief = white(d.brief);
		const uploaderName = d.author ? cyan(d.author.name) : ''
		const uploaderUsername = d.author ? cyan.italic` (@${d.author.username})` : ''
		const author = d.author ? (cyan.bold(`Author: `) + uploaderName + uploaderUsername) : ''
		const link = green.bold(`Link: `) + green.italic(url)

		const content = brief + '\n' + '\n' + link + '\n' + author
		console.log(gray(boxen(content, {
			margin: { top: 2 },
			padding: 1,
			width: 90,
			borderStyle: 'round',
			float: 'center',
			textAlignment: 'left',
			title: title,
			titleAlignment: 'center'
		})));
	}
};

export default articlesLayout;
