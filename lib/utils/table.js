// This file contains the table component used by the handler functions to output results in a tabular format.

import chalk from 'chalk';
import Table from 'cli-table3';
import pkg from 'node-url-shortener';
import terminalLink from 'terminal-link';
const { short } = pkg;
const blue = chalk.blue;
const green = chalk.green;
const gray = chalk.gray;
const yellow = chalk.yellow;
const white = chalk.white;
const bgBlue = chalk.bgBlue;

const table = data => {
	let table = new Table({
		head: [
			blue.bold('Title/Link'),
			blue.bold('Brief'),
			blue.bold('Article by'),

		],
		style: {
			head: [], //disable colors in header cells
			border: [] //disable colors for the border
		},
		colWidths: [27, 32, 18], //set the widths of each column (optional)
		rowHeights: [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		wordWrap: true,
	});


	// Logic to "insert" data fetched into a table.
	for (var d of data) {
		const url = `https://hashnode.com/post/${d.slug}`
		const title = terminalLink.isSupported ? white.bold(terminalLink(d.title, url)) : white.bold(d.title, url);
		const brief = white.italic(d.brief);
		const uploaderName = white.bold(d.author.name);
		const uploaderUsername = gray.italic(d.author.username);
		
		table.push(
			d.author
				? [
						{ content: title, vAlign: 'center' },
						{ content: brief, vAlign: 'center' },
						{
							content: `${uploaderName} (@${uploaderUsername})`,
							vAlign: 'center'
						},
				  ]
				: [
						{ content: title, vAlign: 'center' },
						{ content: brief, vAlign: 'center' }
				  ]
		);
	}
	return chalk.gray(table.toString());
};

export default table;
